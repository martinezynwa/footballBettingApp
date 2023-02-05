import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScoreCreateInput } from "../inputs/ScoreCreateInput";
import { ScoreUpsertInput } from "../inputs/ScoreUpsertInput";

@TypeGraphQL.InputType("ScoreNullableUpdateEnvelopeInput", {
  isAbstract: true
})
export class ScoreNullableUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => ScoreCreateInput, {
    nullable: true
  })
  set?: ScoreCreateInput | undefined;

  @TypeGraphQL.Field(_type => ScoreUpsertInput, {
    nullable: true
  })
  upsert?: ScoreUpsertInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  unset?: boolean | undefined;
}
