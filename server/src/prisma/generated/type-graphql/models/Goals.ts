import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ExtratimeGoals } from "../models/ExtratimeGoals";

@TypeGraphQL.ObjectType("Goals", {
  isAbstract: true
})
export class Goals {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  winner?: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  fulltime!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  halftime!: number;

  @TypeGraphQL.Field(_type => ExtratimeGoals, {
    nullable: true
  })
  extratime?: ExtratimeGoals | null;
}
