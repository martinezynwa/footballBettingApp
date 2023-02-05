import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateH2HArgs } from "./args/AggregateH2HArgs";
import { H2H } from "../../../models/H2H";
import { AggregateH2H } from "../../outputs/AggregateH2H";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => H2H)
export class AggregateH2HResolver {
  @TypeGraphQL.Query(_returns => AggregateH2H, {
    nullable: false
  })
  async aggregateH2H(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateH2HArgs): Promise<AggregateH2H> {
    return getPrismaFromContext(ctx).h2H.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
