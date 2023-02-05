import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExtratimeGoalsNullableUpdateEnvelopeInput } from "../inputs/ExtratimeGoalsNullableUpdateEnvelopeInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";

@TypeGraphQL.InputType("GoalsUpdateInput", {
  isAbstract: true
})
export class GoalsUpdateInput {
  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  winner?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  fulltime?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  halftime?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ExtratimeGoalsNullableUpdateEnvelopeInput, {
    nullable: true
  })
  extratime?: ExtratimeGoalsNullableUpdateEnvelopeInput | undefined;
}
