import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LeagueAvgOrderByAggregateInput } from "../inputs/LeagueAvgOrderByAggregateInput";
import { LeagueCountOrderByAggregateInput } from "../inputs/LeagueCountOrderByAggregateInput";
import { LeagueMaxOrderByAggregateInput } from "../inputs/LeagueMaxOrderByAggregateInput";
import { LeagueMinOrderByAggregateInput } from "../inputs/LeagueMinOrderByAggregateInput";
import { LeagueSumOrderByAggregateInput } from "../inputs/LeagueSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LeagueOrderByWithAggregationInput", {
  isAbstract: true
})
export class LeagueOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LeagueCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LeagueCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LeagueAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LeagueAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LeagueMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LeagueMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LeagueMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LeagueMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LeagueSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LeagueSumOrderByAggregateInput | undefined;
}
