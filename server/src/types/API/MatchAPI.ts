//Match and Odds API

//Fixture model
type Fixture = {
  id: number
  date: string
  status: {
    short: string
  }
}

//League model
type League = {
  id: number
  name: string
  round: string
  season: number
}

//Team model
type Team = {
  id: number
  name: string
  logo: string
  winner?: boolean
}

//Result model
type Goals = {
  home: number
  away: number
}

//Match ending possibilities
export enum matchStatus {
  FINISHED = 'FT',
  EXTRATIME = 'AET',
  PENALTIES = 'PEN',
  POSTPONED = 'PST',
  CANCELLED = 'CANC',
  ABANDONED = 'ABD',
  TECHNICAL_LOSS = 'AWD',
  WALKED_OVER = 'WO',
}

//Score model
export type Score = {
  halftime: Goals
  fulltime: Goals
  extratime?: Goals
  penalty?: Goals
}

//Pre-match details
export type MatchAPI = {
  fixture: Fixture
  league: League
  teams: {
    home: Team
    away: Team
  }
}

//Odds details!
export type MatchOddsAPI = {
  league: {
    id: number
  }
  fixture: {
    id: number
  }
  update: string
  bookmakers: Array<{
    name: string
    bets: Array<{
      values: Array<{
        value: number
        odd: string
      }>
    }>
  }>
}

//result details of finished match
export type MatchResultAPI = {
  fixture: Fixture
  teams: {
    home: Team
    away: Team
    goals: Goals
  }
  score: Score
}

//result details of finished match(use-case => when adding matches from history
export type MatchAndResultAPI = {
  fixture: Fixture
  league: League
  teams: {
    home: Team
    away: Team
  }
  goals: Goals
  score: Score
}
