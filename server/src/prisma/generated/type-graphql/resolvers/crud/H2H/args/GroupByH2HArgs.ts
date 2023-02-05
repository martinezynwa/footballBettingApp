import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { H2HOrderByWithAggregationInput } from "../../../inputs/H2HOrderByWithAggregationInput";
import { H2HScalarWhereWithAggregatesInput } from "../../../inputs/H2HScalarWhereWithAggregatesInput";
import { H2HWhereInput } from "../../../inputs/H2HWhereInput";
import { H2HScalarFieldEnum } from "../../../../enums/H2HScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByH2HArgs {
  @TypeGraphQL.Field(_type => H2HWhereInput, {
    nullable: true
  })
  where?: H2HWhereInput | undefined;

  @TypeGraphQL.Field(_type => [H2HOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: H2HOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HScalarFieldEnum], {
    nullable: false
  })
  by!: "id"[];

  @TypeGraphQL.Field(_type => H2HScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: H2HScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
