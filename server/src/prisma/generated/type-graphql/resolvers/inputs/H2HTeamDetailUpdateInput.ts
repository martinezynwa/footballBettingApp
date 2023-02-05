import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsUpdateEnvelopeInput } from "../inputs/GoalsUpdateEnvelopeInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("H2HTeamDetailUpdateInput", {
  isAbstract: true
})
export class H2HTeamDetailUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  teamId?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GoalsUpdateEnvelopeInput, {
    nullable: true
  })
  goals?: GoalsUpdateEnvelopeInput | undefined;
}
