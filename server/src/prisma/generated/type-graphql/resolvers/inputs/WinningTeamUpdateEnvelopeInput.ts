import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WinningTeamCreateInput } from "../inputs/WinningTeamCreateInput";
import { WinningTeamUpdateInput } from "../inputs/WinningTeamUpdateInput";

@TypeGraphQL.InputType("WinningTeamUpdateEnvelopeInput", {
  isAbstract: true
})
export class WinningTeamUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => WinningTeamCreateInput, {
    nullable: true
  })
  set?: WinningTeamCreateInput | undefined;

  @TypeGraphQL.Field(_type => WinningTeamUpdateInput, {
    nullable: true
  })
  update?: WinningTeamUpdateInput | undefined;
}
