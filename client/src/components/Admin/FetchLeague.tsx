import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ClientError } from 'graphql-request'
import graphqlRequestClient from '../../graphql/graphql-client'
import {
  FetchLeagueDocument,
  FetchLeagueMutation,
} from '../../graphql/generated/graphql'

const FetchLeague = () => {
  const [leagueId, setLeagueId] = useState<number>()

  const { mutate: fetchLeagues } = useMutation(
    async (leagueId: number) => {
      return await graphqlRequestClient.request(FetchLeagueDocument, {
        leagueId,
      })
    },
    {
      onSuccess: (data: FetchLeagueMutation) => {
        console.log('data', data.fetchLeague.message)
      },
      onError: (error: ClientError) => {
        error.response.errors?.forEach(e => {
          console.log(e.extensions.code)
          console.log(e.message)
        })
      },
    },
  )

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLeagueId(parseInt(event.target.value))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (leagueId) {
      fetchLeagues(leagueId)
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="number"
            placeholder="league ID"
            onChange={onChange}
          />
          <button type="submit">Fetch league</button>
        </form>
      </div>
    </>
  )
}

export default FetchLeague
