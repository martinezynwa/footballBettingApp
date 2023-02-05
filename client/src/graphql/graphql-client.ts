import { GraphQLClient } from 'graphql-request'

const graphqlRequestClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_URI as string,
  {
    credentials: 'include',
  },
)

export default graphqlRequestClient
