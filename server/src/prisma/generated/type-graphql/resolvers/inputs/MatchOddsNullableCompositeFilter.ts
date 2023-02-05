import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MatchOddsObjectEqualityInput } from "../inputs/MatchOddsObjectEqualityInput";
import { MatchOddsWhereInput } from "../inputs/MatchOddsWhereInput";

@TypeGraphQL.InputType("MatchOddsNullableCompositeFilter", {
  isAbstract: true
})
export class MatchOddsNullableCompositeFilter {
  @TypeGraphQL.Field(_type => MatchOddsObjectEqualityInput, {
    nullable: true
  })
  equals?: MatchOddsObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => MatchOddsWhereInput, {
    nullable: true
  })
  is?: MatchOddsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MatchOddsWhereInput, {
    nullable: true
  })
  isNot?: MatchOddsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
