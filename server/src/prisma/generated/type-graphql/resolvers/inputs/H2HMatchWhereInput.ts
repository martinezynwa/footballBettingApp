import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HTeamDetailCompositeFilter } from "../inputs/H2HTeamDetailCompositeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("H2HMatchWhereInput", {
  isAbstract: true
})
export class H2HMatchWhereInput {
  @TypeGraphQL.Field(_type => [H2HMatchWhereInput], {
    nullable: true
  })
  AND?: H2HMatchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HMatchWhereInput], {
    nullable: true
  })
  OR?: H2HMatchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HMatchWhereInput], {
    nullable: true
  })
  NOT?: H2HMatchWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  matchId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  leagueId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  date?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  season?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => H2HTeamDetailCompositeFilter, {
    nullable: true
  })
  homeTeam?: H2HTeamDetailCompositeFilter | undefined;

  @TypeGraphQL.Field(_type => H2HTeamDetailCompositeFilter, {
    nullable: true
  })
  awayTeam?: H2HTeamDetailCompositeFilter | undefined;
}
