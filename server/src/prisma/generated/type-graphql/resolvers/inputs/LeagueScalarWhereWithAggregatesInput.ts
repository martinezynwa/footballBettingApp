import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LeagueScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LeagueScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LeagueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LeagueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LeagueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LeagueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LeagueScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LeagueScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  country?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;
}
