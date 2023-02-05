import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MatchScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MatchScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MatchScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MatchScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MatchScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MatchScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MatchScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MatchScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  status?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  date?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  round?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  season?: IntWithAggregatesFilter | undefined;
}
