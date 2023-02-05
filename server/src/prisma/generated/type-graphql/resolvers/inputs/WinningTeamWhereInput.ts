import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("WinningTeamWhereInput", {
  isAbstract: true
})
export class WinningTeamWhereInput {
  @TypeGraphQL.Field(_type => [WinningTeamWhereInput], {
    nullable: true
  })
  AND?: WinningTeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WinningTeamWhereInput], {
    nullable: true
  })
  OR?: WinningTeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WinningTeamWhereInput], {
    nullable: true
  })
  NOT?: WinningTeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  home?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  draw?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  away?: StringFilter | undefined;
}
