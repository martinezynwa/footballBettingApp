import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("WinningTeamCreateInput", {
  isAbstract: true
})
export class WinningTeamCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  home!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  draw!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  away!: string;
}
