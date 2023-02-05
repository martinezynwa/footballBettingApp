import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("ExtratimeGoalsWhereInput", {
  isAbstract: true
})
export class ExtratimeGoalsWhereInput {
  @TypeGraphQL.Field(_type => [ExtratimeGoalsWhereInput], {
    nullable: true
  })
  AND?: ExtratimeGoalsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExtratimeGoalsWhereInput], {
    nullable: true
  })
  OR?: ExtratimeGoalsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExtratimeGoalsWhereInput], {
    nullable: true
  })
  NOT?: ExtratimeGoalsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  extratime?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  penalty?: IntNullableFilter | undefined;
}
