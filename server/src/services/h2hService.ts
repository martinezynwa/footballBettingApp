import prisma from '../util/prisma'
import dotenv from 'dotenv'
import { default as axios, AxiosResponse } from 'axios'
import { H2H } from '@prisma/client'
import { H2HAPI } from '../types/API/H2HAPI'
import { H2HInput, H2HEditInput } from '../types/ServiceInputs'
import { matchStatus } from '../types/API/MatchAPI'
dotenv.config()

const httpLink = 'https://v3.football.api-sports.io'
axios.defaults.headers['x-rapidapi-host'] = 'v3.football.api-sports.io'
axios.defaults.headers['x-rapidapi-key'] = process.env.API_KEY!
axios.defaults.headers['Accept-Encoding'] = 'application/json'

//get specific H2H details from API football
//usecase: for beginning and when creating new H2H match-ups
const getH2H = async (filterInput: H2HInput) => {
  const { teamOneId, teamTwoId, last } = filterInput
  const response: AxiosResponse = await axios.get(
    `${httpLink}/fixtures/headtohead?h2h=${teamOneId}-${teamTwoId}&last=${last}`,
  )
  if (response.data.errors.current) {
    console.log(response.data.errors.current)
    return response.data.errors.current
  }

  const H2HDetails: H2H = {
    id: String(teamOneId) + String(teamTwoId),
    matches: [],
  }

  //parse data into the H2H model
  response.data.response.map((match: H2HAPI) => {
    H2HDetails.matches.push({
      matchId: match.fixture.id,
      leagueId: match.league.id,
      season: match.league.season,
      date: match.fixture.date,
      homeTeam: {
        teamId: match.teams.home.id,
        goals: {
          winner: match.teams.home.winner,
          halftime: match.score.halftime.home,
          fulltime: match.score.fulltime.home,
          extratime:
            match.fixture.status.short === matchStatus.FINISHED
              ? null
              : {
                  extratime: match.score.extratime?.away || null,
                  penalty: match.score.penalty?.away || null,
                },
        },
      },
      awayTeam: {
        teamId: match.teams.away.id,
        goals: {
          winner: match.teams.away.winner,
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
    })
  })

  //add to DB
  const added = await prisma.h2H.create({ data: H2HDetails })
  //check if added.acknowledged === true
}

//updating existing H2H document with finished match
const updateH2H = async (editInput: H2HEditInput) => {
  const teamIds1: string =
    String(editInput.homeTeam.id) + String(editInput.awayTeam.id)
  const teamIds2: string =
    String(editInput.awayTeam.id) + String(editInput.homeTeam.id)

  //get H2H document from database using team IDs
  let { matches, id: h2hId } = await prisma.h2H.findFirstOrThrow({
    where: {
      OR: [{ id: teamIds1 }, { id: teamIds2 }],
    },
  })

  //if there are 10 matches, remove oldest one due to the limit
  if (matches.length === 10) {
    matches.pop()
  }

  //add the newest match to the top of the array
  matches.unshift({
    matchId: editInput.matchId,
    leagueId: editInput.leagueId,
    date: editInput.date,
    season: editInput.season,
    homeTeam: {
      teamId: editInput.homeTeam.id,
      goals: {
        winner: editInput.score.homeTeam > editInput.score.awayTeam,
        fulltime: editInput.score.homeTeam.fulltime,
        halftime: editInput.score.homeTeam.halftime,
        extratime: editInput.score.homeTeam.extratime
          ? {
              extratime: editInput.score.homeTeam.extratime?.extratime || null,
              penalty: editInput.score.homeTeam.extratime?.penalty || null,
            }
          : null,
      },
    },
    awayTeam: {
      teamId: editInput.awayTeam.id,
      goals: {
        winner: editInput.score.awayTeam > editInput.score.homeTeam,
        fulltime: editInput.score.awayTeam.fulltime,
        halftime: editInput.score.awayTeam.halftime,
        extratime: editInput.score.awayTeam.extratime
          ? {
              extratime: editInput.score.awayTeam.extratime?.extratime || null,
              penalty: editInput.score.awayTeam.extratime?.penalty || null,
            }
          : null,
      },
    },
  })

  //remove the matches array from the current mongoDB document
  await prisma.h2H.update({
    where: { id: h2hId },
    data: {
      matches: {
        set: [],
      },
    },
  })

  //push the freshly updated array into the existing
  await prisma.h2H.update({
    where: { id: h2hId },
    data: {
      matches: {
        set: matches,
      },
    },
  })

  //return TBD
}

export default {
  getH2H,
  updateH2H,
}
