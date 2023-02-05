import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Goals } from "../models/Goals";

@TypeGraphQL.ObjectType("Score", {
  isAbstract: true
})
export class Score {
  @TypeGraphQL.Field(_type => Goals, {
    nullable: false
  })
  homeTeam!: Goals;

  @TypeGraphQL.Field(_type => Goals, {
    nullable: false
  })
  awayTeam!: Goals;
}
