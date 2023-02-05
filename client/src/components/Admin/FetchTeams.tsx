import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import graphqlRequestClient from '../../graphql/graphql-client'
import {
  FetchTeamsForLeagueDocument,
  FetchTeamsForLeagueMutation,
} from '../../graphql/generated/graphql'

type TeamsParams = {
  leagueId: number
  season: number
}

const FetchTeams = () => {
  const [teamsParams, setTeamsParams] = useState<TeamsParams>({
    leagueId: undefined!,
    season: undefined!,
  })

  const { mutate: fetchTeams } = useMutation(
    async ({ leagueId, season }: TeamsParams) => {
      return await graphqlRequestClient.request(FetchTeamsForLeagueDocument, {
        leagueId,
        season,
      })
    },
    {
      onSuccess: (data: FetchTeamsForLeagueMutation) => {
        console.log('data', data.fetchTeamsForLeague.message)
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
    setTeamsParams({
      ...teamsParams,
      [event.currentTarget.name]: parseInt(event.currentTarget.value),
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (teamsParams.leagueId && teamsParams.season) {
      fetchTeams(teamsParams)
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
          <button type="submit">Fetch teams</button>
        </form>
      </div>
    </>
  )
}

export default FetchTeams
