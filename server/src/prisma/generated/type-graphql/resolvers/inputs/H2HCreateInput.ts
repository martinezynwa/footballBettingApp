import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HMatchCreateInput } from "../inputs/H2HMatchCreateInput";

@TypeGraphQL.InputType("H2HCreateInput", {
  isAbstract: true
})
export class H2HCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => [H2HMatchCreateInput], {
    nullable: true
  })
  matches?: H2HMatchCreateInput[] | undefined;
}
