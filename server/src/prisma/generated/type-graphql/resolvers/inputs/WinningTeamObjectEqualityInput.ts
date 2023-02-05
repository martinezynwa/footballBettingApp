import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("WinningTeamObjectEqualityInput", {
  isAbstract: true
})
export class WinningTeamObjectEqualityInput {
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
