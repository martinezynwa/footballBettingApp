import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScoreObjectEqualityInput } from "../inputs/ScoreObjectEqualityInput";
import { ScoreWhereInput } from "../inputs/ScoreWhereInput";

@TypeGraphQL.InputType("ScoreNullableCompositeFilter", {
  isAbstract: true
})
export class ScoreNullableCompositeFilter {
  @TypeGraphQL.Field(_type => ScoreObjectEqualityInput, {
    nullable: true
  })
  equals?: ScoreObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => ScoreWhereInput, {
    nullable: true
  })
  is?: ScoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => ScoreWhereInput, {
    nullable: true
  })
  isNot?: ScoreWhereInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
