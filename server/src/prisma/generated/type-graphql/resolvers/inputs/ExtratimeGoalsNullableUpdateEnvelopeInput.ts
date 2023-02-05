import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExtratimeGoalsCreateInput } from "../inputs/ExtratimeGoalsCreateInput";
import { ExtratimeGoalsUpsertInput } from "../inputs/ExtratimeGoalsUpsertInput";

@TypeGraphQL.InputType("ExtratimeGoalsNullableUpdateEnvelopeInput", {
  isAbstract: true
})
export class ExtratimeGoalsNullableUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => ExtratimeGoalsCreateInput, {
    nullable: true
  })
  set?: ExtratimeGoalsCreateInput | undefined;

  @TypeGraphQL.Field(_type => ExtratimeGoalsUpsertInput, {
    nullable: true
  })
  upsert?: ExtratimeGoalsUpsertInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  unset?: boolean | undefined;
}
