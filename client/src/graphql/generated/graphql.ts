import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ActivityResponseTgql = {
  __typename?: 'ActivityResponseTGQL';
  message: Scalars['String'];
};

export type ExtratimeGoals = {
  __typename?: 'ExtratimeGoals';
  extratime?: Maybe<Scalars['Int']>;
  penalty?: Maybe<Scalars['Int']>;
};

export type Goals = {
  __typename?: 'Goals';
  extratime?: Maybe<ExtratimeGoals>;
  fulltime: Scalars['Int'];
  halftime: Scalars['Int'];
  winner?: Maybe<Scalars['Boolean']>;
};

export type H2H = {
  __typename?: 'H2H';
  id: Scalars['String'];
  matches: Array<H2HMatch>;
};

export type H2HMatch = {
  __typename?: 'H2HMatch';
  awayTeam: H2HTeamDetail;
  date: Scalars['String'];
  homeTeam: H2HTeamDetail;
  leagueId: Scalars['Int'];
  matchId: Scalars['Int'];
  season: Scalars['Int'];
};

export type H2HTeamDetail = {
  __typename?: 'H2HTeamDetail';
  goals: Goals;
  teamId: Scalars['Int'];
};

export type League = {
  __typename?: 'League';
  country: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Match = {
  __typename?: 'Match';
  awayTeam: SingleTeam;
  date: Scalars['String'];
  homeTeam: SingleTeam;
  id: Scalars['Int'];
  odds?: Maybe<MatchOdds>;
  round: Scalars['String'];
  score?: Maybe<Score>;
  season: Scalars['Int'];
  status: Scalars['String'];
};

export type MatchOdds = {
  __typename?: 'MatchOdds';
  bookmaker: Scalars['String'];
  fixtureId: Scalars['Int'];
  lastUpdate: Scalars['String'];
  winner: WinningTeam;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: ActivityResponseTgql;
  fetchFinishedMatches: ActivityResponseTgql;
  fetchFutureMatches: ActivityResponseTgql;
  fetchLeague: ActivityResponseTgql;
  fetchTeamsForLeague: ActivityResponseTgql;
};


export type MutationCreateUserArgs = {
  username: Scalars['String'];
};


export type MutationFetchFinishedMatchesArgs = {
  fromDate: Scalars['String'];
  leagueId: Scalars['Int'];
  season: Scalars['Int'];
  toDate: Scalars['String'];
};


export type MutationFetchFutureMatchesArgs = {
  fromDate: Scalars['String'];
  leagueId: Scalars['Int'];
  season: Scalars['Int'];
  toDate: Scalars['String'];
};


export type MutationFetchLeagueArgs = {
  leagueId: Scalars['Int'];
};


export type MutationFetchTeamsForLeagueArgs = {
  leagueId: Scalars['Int'];
  season: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getH2Hs: Array<H2H>;
  getLeagues: Array<League>;
  getMatches: Array<Match>;
};


export type QueryGetMatchesArgs = {
  date?: InputMaybe<Scalars['String']>;
};

export type Score = {
  __typename?: 'Score';
  awayTeam: Goals;
  homeTeam: Goals;
};

export type SingleTeam = {
  __typename?: 'SingleTeam';
  id: Scalars['Int'];
  logo: Scalars['String'];
  name: Scalars['String'];
};

export type WinningTeam = {
  __typename?: 'WinningTeam';
  away: Scalars['String'];
  draw: Scalars['String'];
  home: Scalars['String'];
};

export type FetchLeagueMutationVariables = Exact<{
  leagueId: Scalars['Int'];
}>;


export type FetchLeagueMutation = { __typename?: 'Mutation', fetchLeague: { __typename?: 'ActivityResponseTGQL', message: string } };

export type FetchTeamsForLeagueMutationVariables = Exact<{
  leagueId: Scalars['Int'];
  season: Scalars['Int'];
}>;


export type FetchTeamsForLeagueMutation = { __typename?: 'Mutation', fetchTeamsForLeague: { __typename?: 'ActivityResponseTGQL', message: string } };

export type FetchFinishedMatchesMutationVariables = Exact<{
  leagueId: Scalars['Int'];
  season: Scalars['Int'];
  fromDate: Scalars['String'];
  toDate: Scalars['String'];
}>;


export type FetchFinishedMatchesMutation = { __typename?: 'Mutation', fetchFinishedMatches: { __typename?: 'ActivityResponseTGQL', message: string } };

export type FetchFutureMatchesMutationVariables = Exact<{
  leagueId: Scalars['Int'];
  season: Scalars['Int'];
  fromDate: Scalars['String'];
  toDate: Scalars['String'];
}>;


export type FetchFutureMatchesMutation = { __typename?: 'Mutation', fetchFutureMatches: { __typename?: 'ActivityResponseTGQL', message: string } };

export type GetMatchesQueryVariables = Exact<{
  date?: InputMaybe<Scalars['String']>;
}>;


export type GetMatchesQuery = { __typename?: 'Query', getMatches: Array<{ __typename?: 'Match', id: number, status: string, date: string, round: string, season: number, homeTeam: { __typename?: 'SingleTeam', id: number, name: string, logo: string }, awayTeam: { __typename?: 'SingleTeam', id: number, name: string, logo: string }, odds?: { __typename?: 'MatchOdds', fixtureId: number, lastUpdate: string, bookmaker: string, winner: { __typename?: 'WinningTeam', home: string, draw: string, away: string } } | null, score?: { __typename?: 'Score', homeTeam: { __typename?: 'Goals', winner?: boolean | null, fulltime: number, halftime: number, extratime?: { __typename?: 'ExtratimeGoals', extratime?: number | null, penalty?: number | null } | null }, awayTeam: { __typename?: 'Goals', winner?: boolean | null, fulltime: number, halftime: number, extratime?: { __typename?: 'ExtratimeGoals', extratime?: number | null, penalty?: number | null } | null } } | null }> };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'ActivityResponseTGQL', message: string } };


export const FetchLeagueDocument = `
    mutation fetchLeague($leagueId: Int!) {
  fetchLeague(leagueId: $leagueId) {
    message
  }
}
    `;
export const useFetchLeagueMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<FetchLeagueMutation, TError, FetchLeagueMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<FetchLeagueMutation, TError, FetchLeagueMutationVariables, TContext>(
      ['fetchLeague'],
      (variables?: FetchLeagueMutationVariables) => fetcher<FetchLeagueMutation, FetchLeagueMutationVariables>(client, FetchLeagueDocument, variables, headers)(),
      options
    );
export const FetchTeamsForLeagueDocument = `
    mutation fetchTeamsForLeague($leagueId: Int!, $season: Int!) {
  fetchTeamsForLeague(leagueId: $leagueId, season: $season) {
    message
  }
}
    `;
export const useFetchTeamsForLeagueMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<FetchTeamsForLeagueMutation, TError, FetchTeamsForLeagueMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<FetchTeamsForLeagueMutation, TError, FetchTeamsForLeagueMutationVariables, TContext>(
      ['fetchTeamsForLeague'],
      (variables?: FetchTeamsForLeagueMutationVariables) => fetcher<FetchTeamsForLeagueMutation, FetchTeamsForLeagueMutationVariables>(client, FetchTeamsForLeagueDocument, variables, headers)(),
      options
    );
export const FetchFinishedMatchesDocument = `
    mutation fetchFinishedMatches($leagueId: Int!, $season: Int!, $fromDate: String!, $toDate: String!) {
  fetchFinishedMatches(
    leagueId: $leagueId
    season: $season
    fromDate: $fromDate
    toDate: $toDate
  ) {
    message
  }
}
    `;
export const useFetchFinishedMatchesMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<FetchFinishedMatchesMutation, TError, FetchFinishedMatchesMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<FetchFinishedMatchesMutation, TError, FetchFinishedMatchesMutationVariables, TContext>(
      ['fetchFinishedMatches'],
      (variables?: FetchFinishedMatchesMutationVariables) => fetcher<FetchFinishedMatchesMutation, FetchFinishedMatchesMutationVariables>(client, FetchFinishedMatchesDocument, variables, headers)(),
      options
    );
export const FetchFutureMatchesDocument = `
    mutation fetchFutureMatches($leagueId: Int!, $season: Int!, $fromDate: String!, $toDate: String!) {
  fetchFutureMatches(
    leagueId: $leagueId
    season: $season
    fromDate: $fromDate
    toDate: $toDate
  ) {
    message
  }
}
    `;
export const useFetchFutureMatchesMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<FetchFutureMatchesMutation, TError, FetchFutureMatchesMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<FetchFutureMatchesMutation, TError, FetchFutureMatchesMutationVariables, TContext>(
      ['fetchFutureMatches'],
      (variables?: FetchFutureMatchesMutationVariables) => fetcher<FetchFutureMatchesMutation, FetchFutureMatchesMutationVariables>(client, FetchFutureMatchesDocument, variables, headers)(),
      options
    );
export const GetMatchesDocument = `
    query getMatches($date: String) {
  getMatches(date: $date) {
    id
    status
    date
    round
    season
    homeTeam {
      id
      name
      logo
    }
    awayTeam {
      id
      name
      logo
    }
    odds {
      fixtureId
      lastUpdate
      bookmaker
      winner {
        home
        draw
        away
      }
    }
    score {
      homeTeam {
        winner
        fulltime
        halftime
        extratime {
          extratime
          penalty
        }
      }
      awayTeam {
        winner
        fulltime
        halftime
        extratime {
          extratime
          penalty
        }
      }
    }
  }
}
    `;
export const useGetMatchesQuery = <
      TData = GetMatchesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMatchesQueryVariables,
      options?: UseQueryOptions<GetMatchesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMatchesQuery, TError, TData>(
      variables === undefined ? ['getMatches'] : ['getMatches', variables],
      fetcher<GetMatchesQuery, GetMatchesQueryVariables>(client, GetMatchesDocument, variables, headers),
      options
    );
export const CreateUserDocument = `
    mutation createUser($username: String!) {
  createUser(username: $username) {
    message
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['createUser'],
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables, headers)(),
      options
    );