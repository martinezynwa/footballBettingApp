import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MatchOddsCreateInput } from "../inputs/MatchOddsCreateInput";
import { MatchOddsUpdateInput } from "../inputs/MatchOddsUpdateInput";

@TypeGraphQL.InputType("MatchOddsUpsertInput", {
  isAbstract: true
})
export class MatchOddsUpsertInput {
  @TypeGraphQL.Field(_type => MatchOddsCreateInput, {
    nullable: false
  })
  set!: MatchOddsCreateInput;

  @TypeGraphQL.Field(_type => MatchOddsUpdateInput, {
    nullable: false
  })
  update!: MatchOddsUpdateInput;
}
