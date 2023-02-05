import { ApolloError } from 'apollo-server-core'
import { default as axios, AxiosResponse } from 'axios'
import dotenv from 'dotenv'
import prisma from '../util/prisma'
import { Match, MatchOdds, Goals, Prisma } from '@prisma/client'
import {
  MatchAPI,
  MatchOddsAPI,
  MatchResultAPI,
  matchStatus,
} from '../types/API/MatchAPI'
import { MatchInput, MatchResultInput } from '../types/ServiceInputs'

dotenv.config()

const httpLink = 'https://v3.football.api-sports.io'
axios.defaults.headers['x-rapidapi-host'] = 'v3.football.api-sports.io'
axios.defaults.headers['x-rapidapi-key'] = process.env.API_KEY!
axios.defaults.headers['Accept-Encoding'] = 'application/json'

//get all matches
const fetchFutureMatches = async (filterInput: MatchInput): Promise<string> => {
  const { leagueId, season, fromDate, toDate } = filterInput

  //get match details
  const response: AxiosResponse = await axios.get(
    `${httpLink}/fixtures?league=${leagueId}&season=${season}&from=${fromDate}&to=${toDate}`,
  )

  if (response.data.errors.current) {
    console.log(response.data.errors.current)
    return response.data.errors.current
  }

  const preMatchDetails: Array<Match> = []

  //parse data into the match model
  response.data.response.map((match: MatchAPI) => {
    preMatchDetails.push({
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
      odds: null,
      score: null,
    })
  })

  const oddsDetails: Array<MatchOdds> = []

  //get odds
  await Promise.all(
    preMatchDetails.map(async match => {
      const response: AxiosResponse = await axios.get(
        `${httpLink}/odds?fixture=${match.id}`,
      )

      if (response.data.errors.current) {
        console.log(response.data.errors.current)
        return response.data.errors.current
      }

      response.data.response.map((match: MatchOddsAPI) => {
        oddsDetails.push({
          fixtureId: match.fixture.id,
          lastUpdate: match.update,
          bookmaker: match.bookmakers[0].name,
          winner: {
            home: match.bookmakers[0].bets[0].values[0].odd,
            draw: match.bookmakers[0].bets[0].values[1].odd,
            away: match.bookmakers[0].bets[0].values[2].odd,
          },
        })
      })
    }),
  )

  //update match model with odds
  const updatedMatches = preMatchDetails.map(match => {
    return {
      ...match,
      odds: oddsDetails.find(odds => odds.fixtureId === match.id),
    }
  })

  //add to DB
  try {
    const added = await prisma.match.createMany({ data: updatedMatches })
    return `Added ${added.count} matches`
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ApolloError(error.message, error.code)
    }
    throw new ApolloError('Unknown error', '500')
  }
}

//get result of specific match
const updateMatchWithResult = async (
  filterInput: MatchResultInput,
): Promise<void> => {
  const { matchId } = filterInput

  //get match details
  const response: AxiosResponse = await axios.get(
    `${httpLink}/fixtures?id=${matchId}`,
  )

  if (response.data.errors.current) {
    console.log(response.data.errors.current)
    return response.data.errors.current
  }

  //check if match ended
  if (
    !(Object.values(matchStatus) as string[]).includes(
      response.data.response[0].fixture.status.short,
    )
  ) {
    console.log('Match has not ended yet.')
  }

  //prepare match result object
  type combined = Array<Goals>
  let combinedTeams: combined = []

  response.data.response.map((match: MatchResultAPI) => {
    combinedTeams.push({
      winner: match.teams.goals.home > match.teams.goals.away,
      halftime: match.score.halftime.home,
      fulltime: match.score.fulltime.home,
      extratime:
        match.fixture.status.short === matchStatus.FINISHED
          ? null
          : {
              extratime: match.score.extratime?.home || null,
              penalty: match.score.penalty?.home || null,
            },
    })
    combinedTeams.push({
      winner: match.teams.goals.away > match.teams.goals.home,
      halftime: match.score.halftime.away,
      fulltime: match.score.fulltime.away,
      extratime:
        match.fixture.status.short === matchStatus.FINISHED
          ? null
          : {
              extratime: match.score.extratime?.away || null,
              penalty: match.score.penalty?.away || null,
            },
    })
  })

  //find requested match document and update it
  try {
    const updatedMatchInDb = await prisma.match.update({
      where: {
        id: matchId,
      },
      data: {
        status: 'FT',
        score: { homeTeam: combinedTeams[0], awayTeam: combinedTeams[1] },
      },
    })
    console.log(updatedMatchInDb)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ApolloError(error.message, error.code)
    }
    throw new ApolloError('Unknown error', '500')
  }
}

export default {
  fetchFutureMatches,
  updateMatchWithResult,
}
