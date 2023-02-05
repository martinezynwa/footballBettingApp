import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { H2HTeamDetail } from "../models/H2HTeamDetail";

@TypeGraphQL.ObjectType("H2HMatch", {
  isAbstract: true
})
export class H2HMatch {
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

  @TypeGraphQL.Field(_type => H2HTeamDetail, {
    nullable: false
  })
  homeTeam!: H2HTeamDetail;

  @TypeGraphQL.Field(_type => H2HTeamDetail, {
    nullable: false
  })
  awayTeam!: H2HTeamDetail;
}
