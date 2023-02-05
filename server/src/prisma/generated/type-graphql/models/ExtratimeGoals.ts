import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("ExtratimeGoals", {
  isAbstract: true
})
export class ExtratimeGoals {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  extratime?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  penalty?: number | null;
}
