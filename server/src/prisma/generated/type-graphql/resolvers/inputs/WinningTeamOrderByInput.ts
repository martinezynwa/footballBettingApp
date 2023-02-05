import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("WinningTeamOrderByInput", {
  isAbstract: true
})
export class WinningTeamOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  home?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  draw?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  away?: "asc" | "desc" | undefined;
}
