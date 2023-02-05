import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MatchOddsNullableCreateEnvelopeInput } from "../inputs/MatchOddsNullableCreateEnvelopeInput";
import { ScoreNullableCreateEnvelopeInput } from "../inputs/ScoreNullableCreateEnvelopeInput";
import { SingleTeamCreateEnvelopeInput } from "../inputs/SingleTeamCreateEnvelopeInput";

@TypeGraphQL.InputType("MatchCreateManyInput", {
  isAbstract: true
})
export class MatchCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  date!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  round!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  season!: number;

  @TypeGraphQL.Field(_type => SingleTeamCreateEnvelopeInput, {
    nullable: false
  })
  homeTeam!: SingleTeamCreateEnvelopeInput;

  @TypeGraphQL.Field(_type => SingleTeamCreateEnvelopeInput, {
    nullable: false
  })
  awayTeam!: SingleTeamCreateEnvelopeInput;

  @TypeGraphQL.Field(_type => MatchOddsNullableCreateEnvelopeInput, {
    nullable: true
  })
  odds?: MatchOddsNullableCreateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => ScoreNullableCreateEnvelopeInput, {
    nullable: true
  })
  score?: ScoreNullableCreateEnvelopeInput | undefined;
}
