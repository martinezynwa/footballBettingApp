import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MatchOddsCreateInput } from "../inputs/MatchOddsCreateInput";
import { MatchOddsUpsertInput } from "../inputs/MatchOddsUpsertInput";

@TypeGraphQL.InputType("MatchOddsNullableUpdateEnvelopeInput", {
  isAbstract: true
})
export class MatchOddsNullableUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => MatchOddsCreateInput, {
    nullable: true
  })
  set?: MatchOddsCreateInput | undefined;

  @TypeGraphQL.Field(_type => MatchOddsUpsertInput, {
    nullable: true
  })
  upsert?: MatchOddsUpsertInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  unset?: boolean | undefined;
}
