import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MatchOddsCreateInput } from "../inputs/MatchOddsCreateInput";

@TypeGraphQL.InputType("MatchOddsNullableCreateEnvelopeInput", {
  isAbstract: true
})
export class MatchOddsNullableCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => MatchOddsCreateInput, {
    nullable: true
  })
  set?: MatchOddsCreateInput | undefined;
}
