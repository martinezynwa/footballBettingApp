import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("H2HScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class H2HScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [H2HScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: H2HScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: H2HScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: H2HScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;
}
