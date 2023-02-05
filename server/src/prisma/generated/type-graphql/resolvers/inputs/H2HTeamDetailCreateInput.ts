import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsCreateInput } from "../inputs/GoalsCreateInput";

@TypeGraphQL.InputType("H2HTeamDetailCreateInput", {
  isAbstract: true
})
export class H2HTeamDetailCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  teamId!: number;

  @TypeGraphQL.Field(_type => GoalsCreateInput, {
    nullable: false
  })
  goals!: GoalsCreateInput;
}
