import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExtratimeGoalsCreateInput } from "../inputs/ExtratimeGoalsCreateInput";
import { ExtratimeGoalsUpdateInput } from "../inputs/ExtratimeGoalsUpdateInput";

@TypeGraphQL.InputType("ExtratimeGoalsUpsertInput", {
  isAbstract: true
})
export class ExtratimeGoalsUpsertInput {
  @TypeGraphQL.Field(_type => ExtratimeGoalsCreateInput, {
    nullable: false
  })
  set!: ExtratimeGoalsCreateInput;

  @TypeGraphQL.Field(_type => ExtratimeGoalsUpdateInput, {
    nullable: false
  })
  update!: ExtratimeGoalsUpdateInput;
}
