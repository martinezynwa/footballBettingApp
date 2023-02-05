import { ApolloError } from 'apollo-server-core'
import { GraphQLContext, Session } from '../types/GraphQL'

export const checkSession = (session: Session | null) => {
  //console.log(session, 'SESSION')
  if (!session?.user) {
    throw new ApolloError('Not authorized')
  }

  return session.user
}
