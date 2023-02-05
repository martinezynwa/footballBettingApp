import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { H2HCreateInput } from "../../../inputs/H2HCreateInput";
import { H2HUpdateInput } from "../../../inputs/H2HUpdateInput";
import { H2HWhereUniqueInput } from "../../../inputs/H2HWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneH2HArgs {
  @TypeGraphQL.Field(_type => H2HWhereUniqueInput, {
    nullable: false
  })
  where!: H2HWhereUniqueInput;

  @TypeGraphQL.Field(_type => H2HCreateInput, {
    nullable: false
  })
  create!: H2HCreateInput;

  @TypeGraphQL.Field(_type => H2HUpdateInput, {
    nullable: false
  })
  update!: H2HUpdateInput;
}
