import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsUpdateEnvelopeInput } from "../inputs/GoalsUpdateEnvelopeInput";

@TypeGraphQL.InputType("ScoreUpdateInput", {
  isAbstract: true
})
export class ScoreUpdateInput {
  @TypeGraphQL.Field(_type => GoalsUpdateEnvelopeInput, {
    nullable: true
  })
  homeTeam?: GoalsUpdateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => GoalsUpdateEnvelopeInput, {
    nullable: true
  })
  awayTeam?: GoalsUpdateEnvelopeInput | undefined;
}
