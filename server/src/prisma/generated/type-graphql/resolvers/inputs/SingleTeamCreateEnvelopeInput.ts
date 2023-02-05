import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SingleTeamCreateInput } from "../inputs/SingleTeamCreateInput";

@TypeGraphQL.InputType("SingleTeamCreateEnvelopeInput", {
  isAbstract: true
})
export class SingleTeamCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => SingleTeamCreateInput, {
    nullable: true
  })
  set?: SingleTeamCreateInput | undefined;
}
