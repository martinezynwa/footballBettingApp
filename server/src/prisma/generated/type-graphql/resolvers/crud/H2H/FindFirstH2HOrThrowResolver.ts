import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstH2HOrThrowArgs } from "./args/FindFirstH2HOrThrowArgs";
import { H2H } from "../../../models/H2H";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => H2H)
export class FindFirstH2HOrThrowResolver {
  @TypeGraphQL.Query(_returns => H2H, {
    nullable: true
  })
  async findFirstH2HOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstH2HOrThrowArgs): Promise<H2H | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).h2H.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
