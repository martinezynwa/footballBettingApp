import { Arg, Ctx, Mutation, Query, Resolver, Authorized } from 'type-graphql'
import { Match } from '../../prisma/generated/type-graphql'
import { GraphQLContext } from '../../types/GraphQL'
import { checkSession } from '../../util/checkSession'
import dayjs from 'dayjs'

@Resolver(() => Match)
class MatchResolver {
  @Query(() => [Match])
  async getMatches(
    @Arg('date', { nullable: true }) date: string,
    @Ctx() context: GraphQLContext,
  ): Promise<Array<Match>> {
    const { session, prisma } = context

    checkSession(session)

    const today: string = dayjs(new Date()).format('YYYY-MM-DD')
    
    return await prisma.match.findMany({
      where: {
        date: { contains: date ? dayjs(date).format('YYYY-MM-DD') : today },
      },
    })
  }
}

export default MatchResolver
