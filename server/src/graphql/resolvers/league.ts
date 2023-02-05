import { Arg, Ctx, Mutation, Query, Resolver, Authorized } from 'type-graphql'
import { League } from '../../prisma/generated/type-graphql'
import { GraphQLContext } from '../../types/GraphQL'
import { checkSession } from '../../util/checkSession'
@Resolver(() => League)
class LeagueResolver {
  @Query(() => [League])
  async getLeagues(@Ctx() context: GraphQLContext): Promise<Array<League>> {
    const { session, prisma } = context

    checkSession(session)

    return await prisma.league.findMany({})
  }
}

export default LeagueResolver
