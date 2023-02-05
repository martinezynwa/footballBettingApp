import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { H2HWhereUniqueInput } from "../../../inputs/H2HWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueH2HArgs {
  @TypeGraphQL.Field(_type => H2HWhereUniqueInput, {
    nullable: false
  })
  where!: H2HWhereUniqueInput;
}
