import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsObjectEqualityInput } from "../inputs/GoalsObjectEqualityInput";

@TypeGraphQL.InputType("H2HTeamDetailObjectEqualityInput", {
  isAbstract: true
})
export class H2HTeamDetailObjectEqualityInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  teamId!: number;

  @TypeGraphQL.Field(_type => GoalsObjectEqualityInput, {
    nullable: false
  })
  goals!: GoalsObjectEqualityInput;
}
