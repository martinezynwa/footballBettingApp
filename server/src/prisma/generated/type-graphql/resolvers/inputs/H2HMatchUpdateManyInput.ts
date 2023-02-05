import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HMatchUpdateInput } from "../inputs/H2HMatchUpdateInput";
import { H2HMatchWhereInput } from "../inputs/H2HMatchWhereInput";

@TypeGraphQL.InputType("H2HMatchUpdateManyInput", {
  isAbstract: true
})
export class H2HMatchUpdateManyInput {
  @TypeGraphQL.Field(_type => H2HMatchWhereInput, {
    nullable: false
  })
  where!: H2HMatchWhereInput;

  @TypeGraphQL.Field(_type => H2HMatchUpdateInput, {
    nullable: false
  })
  data!: H2HMatchUpdateInput;
}
