import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScoreCreateInput } from "../inputs/ScoreCreateInput";

@TypeGraphQL.InputType("ScoreNullableCreateEnvelopeInput", {
  isAbstract: true
})
export class ScoreNullableCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => ScoreCreateInput, {
    nullable: true
  })
  set?: ScoreCreateInput | undefined;
}
