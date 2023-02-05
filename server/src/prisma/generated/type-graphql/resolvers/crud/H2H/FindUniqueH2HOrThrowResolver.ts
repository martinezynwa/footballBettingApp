import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueH2HOrThrowArgs } from "./args/FindUniqueH2HOrThrowArgs";
import { H2H } from "../../../models/H2H";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => H2H)
export class FindUniqueH2HOrThrowResolver {
  @TypeGraphQL.Query(_returns => H2H, {
    nullable: true
  })
  async getH2H(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueH2HOrThrowArgs): Promise<H2H | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).h2H.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
