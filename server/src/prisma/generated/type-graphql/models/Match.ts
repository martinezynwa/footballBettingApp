import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MatchOdds } from "../models/MatchOdds";
import { Score } from "../models/Score";
import { SingleTeam } from "../models/SingleTeam";

@TypeGraphQL.ObjectType("Match", {
  isAbstract: true
})
export class Match {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  date!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  round!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  season!: number;

  @TypeGraphQL.Field(_type => SingleTeam, {
    nullable: false
  })
  homeTeam!: SingleTeam;

  @TypeGraphQL.Field(_type => SingleTeam, {
    nullable: false
  })
  awayTeam!: SingleTeam;

  @TypeGraphQL.Field(_type => MatchOdds, {
    nullable: true
  })
  odds?: MatchOdds | null;

  @TypeGraphQL.Field(_type => Score, {
    nullable: true
  })
  score?: Score | null;
}
