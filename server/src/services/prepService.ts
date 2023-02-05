import { ApolloError } from 'apollo-server-core'
import { default as axios, AxiosResponse } from 'axios'
import dotenv from 'dotenv'
import prisma from '../util/prisma'
import { League, Team, Match, Prisma } from '@prisma/client'
import { TeamAPI } from '../types/API/TeamAPI'
import { MatchAndResultAPI, matchStatus } from '../types/API/MatchAPI'
import { MatchInput } from '../types/ServiceInputs'

dotenv.config()

const httpLink = 'https://v3.football.api-sports.io'
axios.defaults.headers['x-rapidapi-host'] = 'v3.football.api-sports.io'
axios.defaults.headers['x-rapidapi-key'] = process.env.API_KEY!
axios.defaults.headers['Accept-Encoding'] = 'application/json'

//get all leagues and save them into database
const fetchLeague = async (id: number): Promise<string> => {
  //check if league exists in database
  const league: number = await prisma.league.count({
    where: {
      id,
    },
  })

  if (league > 0) {
    return `League with ID ${id} is already in the database`
  }

  //get league info from API
  const response: AxiosResponse = await axios.get(
    `${httpLink}/leagues?id=${id}&current=${true}`,
  )

  if (response.data.errors.current) {
    console.log(response.data.errors.current)
    return response.data.errors.current
  }

  //add to DB
  try {
    const newLeague = await prisma.league.create({
      data: {
        id: response.data.response[0].league.id,
        name: response.data.response[0].league.name,
        country: response.data.response[0].country.name,
        type: response.data.response[0].league.type,
      },
    })
    return `Added ${newLeague.name}`
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ApolloError(error.message, error.code)
    }
    throw new ApolloError('Unknown error', '500')
  }
}

//get all teams and save them into database
const fetchTeams = async (id: number, season: number): Promise<string> => {
  //check if league exists in database
  const league: League | null = await prisma.league.findFirst({
    where: {
      id,
    },
  })

  if (!league) {
    return `League with ID ${id} is not in the database`
  }

  //get teams from the league
  const response: AxiosResponse = await axios.get(
    `${httpLink}/teams?league=${league.id}&season=${season}`,
  )

  if (response.data.errors.current) {
    console.log(response.data.errors.current)
    return response.data.errors.current
  }

  //prepare array with teams of the league
  let teamArray: Team[] = []
  response.data.response.map(async ({ team }: TeamAPI) => {
    teamArray.push({
      id: team.id,
      leagueId: league.id,
      leagueName: league.name,
      name: team.name,
      code: team.code ? team.code : team.name.substring(0, 3).toUpperCase(),
      country: team.country,
      logo: team.logo,
      national: team.national,
    })
  })

  //add to db
  try {
    const added = await prisma.team.createMany({ data: teamArray })
    return `Added ${added.count} teams to ${league.name}`
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ApolloError(error.message, error.code)
    }
    throw new ApolloError('Unknown error', '500')
  }
}

//add finished match to database(use-case => when adding matches from history)
const addFinishedMatch = async (filterInput: MatchInput): Promise<string> => {
  const { leagueId, season, fromDate, toDate } = filterInput

  //get match details
  const response: AxiosResponse = await axios.get(
    `${httpLink}/fixtures?league=${leagueId}&season=${season}&from=${fromDate}&to=${toDate}`,
  )
  if (response.data.errors.current) {
    console.log(response.data.errors.current)
    return response.data.errors.current
  }

  const finishedMatches: Array<Match> = []

  //parse data into the match model
  response.data.response.map((match: MatchAndResultAPI) => {
    finishedMatches.push({
      id: match.fixture.id,
      status: match.fixture.status.short,
      date: match.fixture.date,
      round: match.league.round,
      season: match.league.season,
      homeTeam: {
        id: match.teams.home.id,
        name: match.teams.home.name,
        logo: match.teams.home.logo,
      },
      awayTeam: {
        id: match.teams.away.id,
        name: match.teams.away.name,
        logo: match.teams.away.logo,
      },
      score: {
        homeTeam: {
          winner: match.goals.home > match.goals.away,
          halftime: match.score.halftime.home,
          fulltime: match.score.fulltime.home,
          extratime:
            match.fixture.status.short === matchStatus.FINISHED
              ? null
              : {
                  extratime: match.score.extratime?.home || null,
                  penalty: match.score.penalty?.home || null,
                },
          /*...(match.score.extratime?.home !== null && {
            extratime: match.score.extratime?.home,
          }),
          ...(match.score.penalty?.home !== null && {
            penalty: match.score.penalty?.home,
          }),*/
        },
        awayTeam: {
          winner: match.goals.away > match.goals.home,
          halftime: match.score.halftime.away,
          fulltime: match.score.fulltime.away,
          extratime:
            match.fixture.status.short === matchStatus.FINISHED
              ? null
              : {
                  extratime: match.score.extratime?.away || null,
                  penalty: match.score.penalty?.away || null,
                },
        },
      },
      odds: null,
    })
  })

  //add to DB
  try {
    const added = await prisma.match.createMany({ data: finishedMatches })
    return `Added ${added.count} already finished matches`
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ApolloError(error.message, error.code)
    }
    throw new ApolloError('Unknown error', '500')
  }
}

export default {
  fetchLeague,
  fetchTeams,
  addFinishedMatch,
}
