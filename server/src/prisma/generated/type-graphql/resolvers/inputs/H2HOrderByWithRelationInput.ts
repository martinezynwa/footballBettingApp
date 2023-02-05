import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HMatchOrderByCompositeAggregateInput } from "../inputs/H2HMatchOrderByCompositeAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("H2HOrderByWithRelationInput", {
  isAbstract: true
})
export class H2HOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => H2HMatchOrderByCompositeAggregateInput, {
    nullable: true
  })
  matches?: H2HMatchOrderByCompositeAggregateInput | undefined;
}
