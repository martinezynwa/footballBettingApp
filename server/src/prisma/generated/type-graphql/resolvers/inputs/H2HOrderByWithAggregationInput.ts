import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HCountOrderByAggregateInput } from "../inputs/H2HCountOrderByAggregateInput";
import { H2HMaxOrderByAggregateInput } from "../inputs/H2HMaxOrderByAggregateInput";
import { H2HMinOrderByAggregateInput } from "../inputs/H2HMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("H2HOrderByWithAggregationInput", {
  isAbstract: true
})
export class H2HOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => H2HCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: H2HCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => H2HMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: H2HMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => H2HMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: H2HMinOrderByAggregateInput | undefined;
}
