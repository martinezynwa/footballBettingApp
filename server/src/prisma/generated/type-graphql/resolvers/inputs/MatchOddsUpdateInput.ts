import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WinningTeamUpdateEnvelopeInput } from "../inputs/WinningTeamUpdateEnvelopeInput";

@TypeGraphQL.InputType("MatchOddsUpdateInput", {
  isAbstract: true
})
export class MatchOddsUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  fixtureId?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastUpdate?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bookmaker?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => WinningTeamUpdateEnvelopeInput, {
    nullable: true
  })
  winner?: WinningTeamUpdateEnvelopeInput | undefined;
}
