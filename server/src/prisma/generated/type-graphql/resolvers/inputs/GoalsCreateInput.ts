import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExtratimeGoalsCreateInput } from "../inputs/ExtratimeGoalsCreateInput";

@TypeGraphQL.InputType("GoalsCreateInput", {
  isAbstract: true
})
export class GoalsCreateInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  winner?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  fulltime!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  halftime!: number;

  @TypeGraphQL.Field(_type => ExtratimeGoalsCreateInput, {
    nullable: true
  })
  extratime?: ExtratimeGoalsCreateInput | undefined;
}
