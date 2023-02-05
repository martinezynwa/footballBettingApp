import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  Match,
  GetMatchesDocument,
  GetMatchesQuery,
} from '../../graphql/generated/graphql'
import graphqlRequestClient from '../../graphql/graphql-client'
import dayjs, { Dayjs } from 'dayjs'


const Matches = () => {
  const [date, setDate] = useState<Dayjs>(dayjs(new Date()))

  const { data, error } = useQuery<GetMatchesQuery, Error, Match[]>({
    queryKey: ['matches', date.toJSON().substring(0, 10)],
    queryFn: async () => {
      return graphqlRequestClient.request(GetMatchesDocument, {
        date,
      })
    },
    select: response => response.getMatches,
    onError: () => {
      console.log(error)
    },
  })

  return (
    <>
      <div>
        <h2>Date is: {date.toJSON().substring(0, 10)}</h2>
        <button
          className="mr-16"
          onClick={() => setDate(dayjs(date).add(-1, 'day'))}>
          {'<----'}
        </button>
        <button onClick={() => setDate(dayjs(date).add(1, 'day'))}>
          {'---->'}
        </button>
        <h2>
          {data?.map((m: Match) => (
            <div key={m.id}>
              {m.homeTeam.name} vs {m.awayTeam.name}
            </div>
          ))}
        </h2>
      </div>
    </>
  )
}

export default Matches
