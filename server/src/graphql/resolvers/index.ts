import userResolvers from './user'
import leagueResolvers from './league'
import matchResolvers from './match'
import adminResolvers from './admin'
import merge from 'lodash.merge'

const resolvers = merge(
  {},
  userResolvers,
  matchResolvers,
  leagueResolvers,
  adminResolvers,
)

export default resolvers
