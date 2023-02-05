import {
  Arg,
  Args,
  ArgsType,
  Ctx,
  Int,
  Mutation,
  Query,
  Resolver,
  Authorized,
  ObjectType,
} from 'type-graphql'
import { GraphQLContext } from '../../types/GraphQL'
import prepService from '../../services/prepService'
import matchService from '../../services/matchService'
import h2hService from '../../services/h2hService'
import { ActivityResponseTGQL } from '../../types/ActivityResponse'
import { checkAdmin } from '../../util/checkAdmin'

@Resolver()
class AdminResolver {
  @Mutation(() => ActivityResponseTGQL)
  async fetchLeague(
    @Arg('leagueId', () => Int) leagueId: number,
    @Ctx() context: GraphQLContext,
  ): Promise<ActivityResponseTGQL> {
    const { session } = context
    checkAdmin(session?.user?.id!)

    const response = await prepService.fetchLeague(leagueId)

    return { message: response }
  }

  @Mutation(() => ActivityResponseTGQL)
  async fetchTeamsForLeague(
    @Arg('leagueId', () => Int) leagueId: number,
    @Arg('season', () => Int) season: number,
    @Ctx() context: GraphQLContext,
  ): Promise<ActivityResponseTGQL> {
    const { session } = context
    checkAdmin(session?.user?.id!)

    const response = await prepService.fetchTeams(leagueId, season)

    return { message: response }
  }

  @Mutation(() => ActivityResponseTGQL)
  async fetchFinishedMatches(
    @Arg('leagueId', () => Int) leagueId: number,
    @Arg('season', () => Int) season: number,
    @Arg('fromDate', () => String) fromDate: string,
    @Arg('toDate', () => String) toDate: string,
    @Ctx() context: GraphQLContext,
  ): Promise<ActivityResponseTGQL> {
    const { session } = context
    checkAdmin(session?.user?.id!)

    const response = await prepService.addFinishedMatch({
      leagueId,
      season,
      fromDate,
      toDate,
    })

    return { message: response }
  }

  @Mutation(() => ActivityResponseTGQL)
  async fetchFutureMatches(
    @Arg('leagueId', () => Int) leagueId: number,
    @Arg('season', () => Int) season: number,
    @Arg('fromDate', () => String) fromDate: string,
    @Arg('toDate', () => String) toDate: string,
    @Ctx() context: GraphQLContext,
  ): Promise<ActivityResponseTGQL> {
    const { session } = context
    checkAdmin(session?.user?.id!)

    const response = await matchService.fetchFutureMatches({
      leagueId,
      season,
      fromDate,
      toDate,
    })

    return { message: response }
  }
}

export default AdminResolver
