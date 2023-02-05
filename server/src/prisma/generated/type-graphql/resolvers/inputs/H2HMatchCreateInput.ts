import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HTeamDetailCreateInput } from "../inputs/H2HTeamDetailCreateInput";

@TypeGraphQL.InputType("H2HMatchCreateInput", {
  isAbstract: true
})
export class H2HMatchCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  matchId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  leagueId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  date!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  season!: number;

  @TypeGraphQL.Field(_type => H2HTeamDetailCreateInput, {
    nullable: false
  })
  homeTeam!: H2HTeamDetailCreateInput;

  @TypeGraphQL.Field(_type => H2HTeamDetailCreateInput, {
    nullable: false
  })
  awayTeam!: H2HTeamDetailCreateInput;
}
