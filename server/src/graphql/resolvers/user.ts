import { Arg, Ctx, Mutation, Query, Resolver, Authorized } from 'type-graphql'
import { GraphQLContext } from '../../types/GraphQL'
import { ActivityResponseTGQL } from '../../types/ActivityResponse'

@Resolver()
class UserResolver {
  @Mutation(() => ActivityResponseTGQL)
  async createUser(
    @Arg('username') username: string,
    @Ctx() context: GraphQLContext,
  ) {
    const { session, prisma } = context
    if (!session?.user) {
      return {
        error: 'Not authorized',
      }
    }

    try {
      const userExists = await prisma.user.findFirst({
        where: {
          username,
        },
      })

      if (userExists) {
        return {
          error: 'Username is taken already.',
        }
      }

      const updatedUser = await prisma.user.update({
        where: {
          email: session.user?.email,
        },
        data: {
          username,
        },
      })

      //check if added.acknowledged === true

      return { success: true }
    } catch (error: any) {
      return {
        error: error?.message,
      }
    }
  }
}

export default UserResolver
