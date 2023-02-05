import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsCreateInput } from "../inputs/GoalsCreateInput";

@TypeGraphQL.InputType("ScoreCreateInput", {
  isAbstract: true
})
export class ScoreCreateInput {
  @TypeGraphQL.Field(_type => GoalsCreateInput, {
    nullable: false
  })
  homeTeam!: GoalsCreateInput;

  @TypeGraphQL.Field(_type => GoalsCreateInput, {
    nullable: false
  })
  awayTeam!: GoalsCreateInput;
}
