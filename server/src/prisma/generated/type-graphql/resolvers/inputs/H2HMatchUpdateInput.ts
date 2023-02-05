import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HTeamDetailUpdateEnvelopeInput } from "../inputs/H2HTeamDetailUpdateEnvelopeInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("H2HMatchUpdateInput", {
  isAbstract: true
})
export class H2HMatchUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  matchId?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  leagueId?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  season?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => H2HTeamDetailUpdateEnvelopeInput, {
    nullable: true
  })
  homeTeam?: H2HTeamDetailUpdateEnvelopeInput | undefined;

  @TypeGraphQL.Field(_type => H2HTeamDetailUpdateEnvelopeInput, {
    nullable: true
  })
  awayTeam?: H2HTeamDetailUpdateEnvelopeInput | undefined;
}
