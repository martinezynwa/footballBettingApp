import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HMatchCreateInput } from "../inputs/H2HMatchCreateInput";

@TypeGraphQL.InputType("H2HUpdateManyMutationInput", {
  isAbstract: true
})
export class H2HUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => [H2HMatchCreateInput], {
    nullable: true
  })
  matches?: H2HMatchCreateInput[] | undefined;
}
