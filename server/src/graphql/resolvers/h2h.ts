import { Arg, Ctx, Mutation, Query, Resolver, Authorized } from 'type-graphql'
import { H2H } from '../../prisma/generated/type-graphql'
import { GraphQLContext } from '../../types/GraphQL'

@Resolver(() => H2H)
class UserResolver {
  @Query(() => [H2H])
  async getH2Hs(@Ctx() context: GraphQLContext) {
    const { session, prisma } = context
    const h2h = await prisma.h2H.findMany({})
    return h2h
  }
}

export default UserResolver
