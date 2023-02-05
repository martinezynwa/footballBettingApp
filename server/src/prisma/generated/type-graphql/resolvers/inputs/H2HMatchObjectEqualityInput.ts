import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HTeamDetailObjectEqualityInput } from "../inputs/H2HTeamDetailObjectEqualityInput";

@TypeGraphQL.InputType("H2HMatchObjectEqualityInput", {
  isAbstract: true
})
export class H2HMatchObjectEqualityInput {
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

  @TypeGraphQL.Field(_type => H2HTeamDetailObjectEqualityInput, {
    nullable: false
  })
  homeTeam!: H2HTeamDetailObjectEqualityInput;

  @TypeGraphQL.Field(_type => H2HTeamDetailObjectEqualityInput, {
    nullable: false
  })
  awayTeam!: H2HTeamDetailObjectEqualityInput;
}
