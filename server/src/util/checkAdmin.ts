import { ApolloError } from 'apollo-server-core'

export const checkAdmin = (userId: string) => {
  console.log('userId is ', userId)
  if (userId !== process.env.ADMIN_ID) {
    throw new ApolloError('Not authorized')
  }
}
