import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsObjectEqualityInput } from "../inputs/GoalsObjectEqualityInput";

@TypeGraphQL.InputType("ScoreObjectEqualityInput", {
  isAbstract: true
})
export class ScoreObjectEqualityInput {
  @TypeGraphQL.Field(_type => GoalsObjectEqualityInput, {
    nullable: false
  })
  homeTeam!: GoalsObjectEqualityInput;

  @TypeGraphQL.Field(_type => GoalsObjectEqualityInput, {
    nullable: false
  })
  awayTeam!: GoalsObjectEqualityInput;
}
