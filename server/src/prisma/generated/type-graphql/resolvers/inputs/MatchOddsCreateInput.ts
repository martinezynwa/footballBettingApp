import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WinningTeamCreateInput } from "../inputs/WinningTeamCreateInput";

@TypeGraphQL.InputType("MatchOddsCreateInput", {
  isAbstract: true
})
export class MatchOddsCreateInput {
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

  @TypeGraphQL.Field(_type => WinningTeamCreateInput, {
    nullable: false
  })
  winner!: WinningTeamCreateInput;
}
