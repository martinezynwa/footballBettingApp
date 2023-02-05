import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { H2HOrderByWithRelationInput } from "../../../inputs/H2HOrderByWithRelationInput";
import { H2HWhereInput } from "../../../inputs/H2HWhereInput";
import { H2HWhereUniqueInput } from "../../../inputs/H2HWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateH2HArgs {
  @TypeGraphQL.Field(_type => H2HWhereInput, {
    nullable: true
  })
  where?: H2HWhereInput | undefined;

  @TypeGraphQL.Field(_type => [H2HOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: H2HOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => H2HWhereUniqueInput, {
    nullable: true
  })
  cursor?: H2HWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
