import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MatchOddsOrderByInput } from "../inputs/MatchOddsOrderByInput";
import { ScoreOrderByInput } from "../inputs/ScoreOrderByInput";
import { SingleTeamOrderByInput } from "../inputs/SingleTeamOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MatchOrderByWithRelationInput", {
  isAbstract: true
})
export class MatchOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  round?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  season?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SingleTeamOrderByInput, {
    nullable: true
  })
  homeTeam?: SingleTeamOrderByInput | undefined;

  @TypeGraphQL.Field(_type => SingleTeamOrderByInput, {
    nullable: true
  })
  awayTeam?: SingleTeamOrderByInput | undefined;

  @TypeGraphQL.Field(_type => MatchOddsOrderByInput, {
    nullable: true
  })
  odds?: MatchOddsOrderByInput | undefined;

  @TypeGraphQL.Field(_type => ScoreOrderByInput, {
    nullable: true
  })
  score?: ScoreOrderByInput | undefined;
}
