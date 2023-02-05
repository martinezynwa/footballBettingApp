import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLeagueArgs } from "./args/AggregateLeagueArgs";
import { League } from "../../../models/League";
import { AggregateLeague } from "../../outputs/AggregateLeague";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => League)
export class AggregateLeagueResolver {
  @TypeGraphQL.Query(_returns => AggregateLeague, {
    nullable: false
  })
  async aggregateLeague(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLeagueArgs): Promise<AggregateLeague> {
    return getPrismaFromContext(ctx).league.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
