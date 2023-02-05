import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsCreateInput } from "../inputs/GoalsCreateInput";
import { GoalsUpdateInput } from "../inputs/GoalsUpdateInput";

@TypeGraphQL.InputType("GoalsUpdateEnvelopeInput", {
  isAbstract: true
})
export class GoalsUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => GoalsCreateInput, {
    nullable: true
  })
  set?: GoalsCreateInput | undefined;

  @TypeGraphQL.Field(_type => GoalsUpdateInput, {
    nullable: true
  })
  update?: GoalsUpdateInput | undefined;
}
