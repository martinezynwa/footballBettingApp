import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MatchOddsNullableUpdateEnvelopeInput } from "../inputs/MatchOddsNullableUpdateEnvelopeInput";
import { ScoreNullableUpdateEnvelopeInput } from "../inputs/ScoreNullableUpdateEnvelopeInput";
import { SingleTeamUpdateEnvelopeInput } from "../inputs/SingleTeamUpdateEnvelopeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MatchUpdateInput", {
  isAbstract: true
})
export class MatchUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  round?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  season?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SingleTeamUpdateEnvelopeInput, {
    nullable: true
  })
  homeTeam?: SingleTeamUpdateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => SingleTeamUpdateEnvelopeInput, {
    nullable: true
  })
  awayTeam?: SingleTeamUpdateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => MatchOddsNullableUpdateEnvelopeInput, {
    nullable: true
  })
  odds?: MatchOddsNullableUpdateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => ScoreNullableUpdateEnvelopeInput, {
    nullable: true
  })
  score?: ScoreNullableUpdateEnvelopeInput | undefined;
}
