//match info input
export type MatchInput = {
  leagueId: number
  season: number
  fromDate: string
  toDate: string
}

//match result input
export type MatchResultInput = {
  matchId: number
}

//H2H input for getting details
export type H2HInput = {
  teamOneId: number
  teamTwoId: number
  last: number //last x matches
}

//H2H edit input
export type H2HEditInput = {
  matchId: number
  leagueId: number
  date: string
  season: number
  homeTeam: {
    id: number
  }
  awayTeam: {
    id: number
  }
  score: {
    homeTeam: {
      winner: boolean
      halftime: number
      fulltime: number
      extratime?: {
        extratime?: number
        penalty?: number
      }
    }
    awayTeam: {
      winner: boolean
      halftime: number
      fulltime: number
      extratime?: {
        extratime?: number
        penalty?: number
      }
    }
  }
}