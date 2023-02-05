import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { H2HUpdateManyMutationInput } from "../../../inputs/H2HUpdateManyMutationInput";
import { H2HWhereInput } from "../../../inputs/H2HWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyH2HArgs {
  @TypeGraphQL.Field(_type => H2HUpdateManyMutationInput, {
    nullable: false
  })
  data!: H2HUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => H2HWhereInput, {
    nullable: true
  })
  where?: H2HWhereInput | undefined;
}
