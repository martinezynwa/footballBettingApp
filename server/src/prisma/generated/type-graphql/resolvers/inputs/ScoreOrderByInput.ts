import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsOrderByInput } from "../inputs/GoalsOrderByInput";

@TypeGraphQL.InputType("ScoreOrderByInput", {
  isAbstract: true
})
export class ScoreOrderByInput {
  @TypeGraphQL.Field(_type => GoalsOrderByInput, {
    nullable: true
  })
  homeTeam?: GoalsOrderByInput | undefined;

  @TypeGraphQL.Field(_type => GoalsOrderByInput, {
    nullable: true
  })
  awayTeam?: GoalsOrderByInput | undefined;
}
