import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { H2HCreateManyInput } from "../../../inputs/H2HCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyH2HArgs {
  @TypeGraphQL.Field(_type => [H2HCreateManyInput], {
    nullable: false
  })
  data!: H2HCreateManyInput[];
}
