import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExtratimeGoalsObjectEqualityInput } from "../inputs/ExtratimeGoalsObjectEqualityInput";
import { ExtratimeGoalsWhereInput } from "../inputs/ExtratimeGoalsWhereInput";

@TypeGraphQL.InputType("ExtratimeGoalsNullableCompositeFilter", {
  isAbstract: true
})
export class ExtratimeGoalsNullableCompositeFilter {
  @TypeGraphQL.Field(_type => ExtratimeGoalsObjectEqualityInput, {
    nullable: true
  })
  equals?: ExtratimeGoalsObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => ExtratimeGoalsWhereInput, {
    nullable: true
  })
  is?: ExtratimeGoalsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExtratimeGoalsWhereInput, {
    nullable: true
  })
  isNot?: ExtratimeGoalsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
