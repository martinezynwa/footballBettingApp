import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MatchAvgOrderByAggregateInput } from "../inputs/MatchAvgOrderByAggregateInput";
import { MatchCountOrderByAggregateInput } from "../inputs/MatchCountOrderByAggregateInput";
import { MatchMaxOrderByAggregateInput } from "../inputs/MatchMaxOrderByAggregateInput";
import { MatchMinOrderByAggregateInput } from "../inputs/MatchMinOrderByAggregateInput";
import { MatchSumOrderByAggregateInput } from "../inputs/MatchSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MatchOrderByWithAggregationInput", {
  isAbstract: true
})
export class MatchOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => MatchCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MatchCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MatchAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MatchAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MatchMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MatchMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MatchMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MatchMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MatchSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MatchSumOrderByAggregateInput | undefined;
}
