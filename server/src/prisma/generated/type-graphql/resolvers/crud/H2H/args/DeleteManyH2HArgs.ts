import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { H2HWhereInput } from "../../../inputs/H2HWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyH2HArgs {
  @TypeGraphQL.Field(_type => H2HWhereInput, {
    nullable: true
  })
  where?: H2HWhereInput | undefined;
}
