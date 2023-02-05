import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MatchOddsNullableCompositeFilter } from "../inputs/MatchOddsNullableCompositeFilter";
import { ScoreNullableCompositeFilter } from "../inputs/ScoreNullableCompositeFilter";
import { SingleTeamCompositeFilter } from "../inputs/SingleTeamCompositeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MatchWhereInput", {
  isAbstract: true
})
export class MatchWhereInput {
  @TypeGraphQL.Field(_type => [MatchWhereInput], {
    nullable: true
  })
  AND?: MatchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MatchWhereInput], {
    nullable: true
  })
  OR?: MatchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MatchWhereInput], {
    nullable: true
  })
  NOT?: MatchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  date?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  round?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  season?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SingleTeamCompositeFilter, {
    nullable: true
  })
  homeTeam?: SingleTeamCompositeFilter | undefined;

  @TypeGraphQL.Field(_type => SingleTeamCompositeFilter, {
    nullable: true
  })
  awayTeam?: SingleTeamCompositeFilter | undefined;

  @TypeGraphQL.Field(_type => MatchOddsNullableCompositeFilter, {
    nullable: true
  })
  odds?: MatchOddsNullableCompositeFilter | undefined;

  @TypeGraphQL.Field(_type => ScoreNullableCompositeFilter, {
    nullable: true
  })
  score?: ScoreNullableCompositeFilter | undefined;
}
