//H2H API

type Fixture = {
  id: number
  date: string
  status: {
    short: string
  }
}

type League = {
  id: number
  season: number
}

type Team = {
  id: number
  name: string
  winner: boolean
}

type Goals = {
  home: number
  away: number
}

type Score = {
  halftime: Goals
  fulltime: Goals
  extratime: Goals
  penalty: Goals
}

export type H2HAPI = {
  fixture: Fixture
  league: League
  teams: {
    home: Team
    away: Team
  }
  goals: Goals
  score: Score
}
