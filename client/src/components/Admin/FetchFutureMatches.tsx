import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import graphqlRequestClient from '../../graphql/graphql-client'
import {
  FetchFutureMatchesDocument,
  FetchFutureMatchesMutation,
} from '../../graphql/generated/graphql'
import { Dayjs } from 'dayjs'

type FutureMatchesParams = {
  leagueId: number
  season: number
  fromDate: Dayjs | undefined
  toDate: Dayjs | undefined
}

const FetchFutureMatches = () => {
  const [matchesParams, setMatchesParams] = useState<FutureMatchesParams>({
    leagueId: undefined!,
    season: undefined!,
    fromDate: undefined,
    toDate: undefined,
  })

  const { mutate: fetchFutureMatches } = useMutation(
    async ({ leagueId, season, fromDate, toDate }: FutureMatchesParams) => {
      return await graphqlRequestClient.request(FetchFutureMatchesDocument, {
        leagueId,
        season,
        fromDate,
        toDate,
      })
    },
    {
      onSuccess: (data: FetchFutureMatchesMutation) => {
        console.log('data', data.fetchFutureMatches.message)
      },
      onError: (error: ClientError) => {
        error.response.errors?.forEach(e => {
          console.log(e.extensions.code)
          console.log(e.message)
        })
      },
    },
  )

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setMatchesParams({
      ...matchesParams,
      [event.currentTarget.name]:
        event.currentTarget.name === 'leagueId' ||
        event.currentTarget.name === 'season'
          ? parseInt(event.currentTarget.value)
          : event.currentTarget.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (
      matchesParams.leagueId &&
      matchesParams.season &&
      matchesParams.fromDate &&
      matchesParams.toDate
    ) {
      console.log(matchesParams)
      fetchFutureMatches(matchesParams)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            required
            name="leagueId"
            type="number"
            placeholder="league ID"
            onChange={onChange}
          />
          <input
            required
            name="season"
            type="number"
            placeholder="season year"
            onChange={onChange}
          />
          <input
            required
            name="fromDate"
            type="date"
            onChange={onChange}
          />
          <input
            required
            name="toDate"
            type="date"
            onChange={onChange}
          />
          <button type="submit">Fetch future matches</button>
        </form>
      </div>
    </>
  )
}

export default FetchFutureMatches
