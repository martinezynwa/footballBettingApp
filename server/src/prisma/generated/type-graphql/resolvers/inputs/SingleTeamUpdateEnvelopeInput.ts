import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SingleTeamCreateInput } from "../inputs/SingleTeamCreateInput";
import { SingleTeamUpdateInput } from "../inputs/SingleTeamUpdateInput";

@TypeGraphQL.InputType("SingleTeamUpdateEnvelopeInput", {
  isAbstract: true
})
export class SingleTeamUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => SingleTeamCreateInput, {
    nullable: true
  })
  set?: SingleTeamCreateInput | undefined;

  @TypeGraphQL.Field(_type => SingleTeamUpdateInput, {
    nullable: true
  })
  update?: SingleTeamUpdateInput | undefined;
}
