import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HMatchWhereInput } from "../inputs/H2HMatchWhereInput";

@TypeGraphQL.InputType("H2HMatchDeleteManyInput", {
  isAbstract: true
})
export class H2HMatchDeleteManyInput {
  @TypeGraphQL.Field(_type => H2HMatchWhereInput, {
    nullable: false
  })
  where!: H2HMatchWhereInput;
}
