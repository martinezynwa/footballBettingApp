import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import graphqlRequestClient from '../../graphql/graphql-client'
import {
  FetchFinishedMatchesDocument,
  FetchFinishedMatchesMutation,
} from '../../graphql/generated/graphql'
import { Dayjs } from 'dayjs'

type FinishedMatchesParams = {
  leagueId: number
  season: number
  fromDate: Dayjs | undefined
  toDate: Dayjs | undefined
}

const FetchFinishedMatches = () => {
  const [matchesParams, setMatchesParams] = useState<FinishedMatchesParams>({
    leagueId: undefined!,
    season: undefined!,
    fromDate: undefined,
    toDate: undefined,
  })

  const { mutate: fetchFinishedMatches } = useMutation(
    async ({ leagueId, season, fromDate, toDate }: FinishedMatchesParams) => {
      return await graphqlRequestClient.request(FetchFinishedMatchesDocument, {
        leagueId,
        season,
        fromDate,
        toDate,
      })
    },
    {
      onSuccess: (data: FetchFinishedMatchesMutation) => {
        console.log('data', data.fetchFinishedMatches.message)
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
      fetchFinishedMatches(matchesParams)
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
          <button type="submit">Fetch finished matches</button>
        </form>
      </div>
    </>
  )
}

export default FetchFinishedMatches
