import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { H2HCreateInput } from "../../../inputs/H2HCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneH2HArgs {
  @TypeGraphQL.Field(_type => H2HCreateInput, {
    nullable: false
  })
  data!: H2HCreateInput;
}
