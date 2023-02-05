import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { WinningTeam } from "../models/WinningTeam";

@TypeGraphQL.ObjectType("MatchOdds", {
  isAbstract: true
})
export class MatchOdds {
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

  @TypeGraphQL.Field(_type => WinningTeam, {
    nullable: false
  })
  winner!: WinningTeam;
}
