import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { H2HUpdateInput } from "../../../inputs/H2HUpdateInput";
import { H2HWhereUniqueInput } from "../../../inputs/H2HWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneH2HArgs {
  @TypeGraphQL.Field(_type => H2HUpdateInput, {
    nullable: false
  })
  data!: H2HUpdateInput;

  @TypeGraphQL.Field(_type => H2HWhereUniqueInput, {
    nullable: false
  })
  where!: H2HWhereUniqueInput;
}
