import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HTeamDetailCreateInput } from "../inputs/H2HTeamDetailCreateInput";
import { H2HTeamDetailUpdateInput } from "../inputs/H2HTeamDetailUpdateInput";

@TypeGraphQL.InputType("H2HTeamDetailUpdateEnvelopeInput", {
  isAbstract: true
})
export class H2HTeamDetailUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => H2HTeamDetailCreateInput, {
    nullable: true
  })
  set?: H2HTeamDetailCreateInput | undefined;

  @TypeGraphQL.Field(_type => H2HTeamDetailUpdateInput, {
    nullable: true
  })
  update?: H2HTeamDetailUpdateInput | undefined;
}
