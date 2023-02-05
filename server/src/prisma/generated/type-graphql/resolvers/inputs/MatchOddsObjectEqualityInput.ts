import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WinningTeamObjectEqualityInput } from "../inputs/WinningTeamObjectEqualityInput";

@TypeGraphQL.InputType("MatchOddsObjectEqualityInput", {
  isAbstract: true
})
export class MatchOddsObjectEqualityInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  fixtureId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastUpdate!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bookmaker!: string;

  @TypeGraphQL.Field(_type => WinningTeamObjectEqualityInput, {
    nullable: false
  })
  winner!: WinningTeamObjectEqualityInput;
}
