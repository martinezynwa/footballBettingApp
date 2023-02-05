import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsObjectEqualityInput } from "../inputs/GoalsObjectEqualityInput";
import { GoalsWhereInput } from "../inputs/GoalsWhereInput";

@TypeGraphQL.InputType("GoalsCompositeFilter", {
  isAbstract: true
})
export class GoalsCompositeFilter {
  @TypeGraphQL.Field(_type => GoalsObjectEqualityInput, {
    nullable: true
  })
  equals?: GoalsObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => GoalsWhereInput, {
    nullable: true
  })
  is?: GoalsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GoalsWhereInput, {
    nullable: true
  })
  isNot?: GoalsWhereInput | undefined;
}
