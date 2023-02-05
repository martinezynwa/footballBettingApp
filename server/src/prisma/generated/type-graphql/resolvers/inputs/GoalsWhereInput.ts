import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { ExtratimeGoalsNullableCompositeFilter } from "../inputs/ExtratimeGoalsNullableCompositeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("GoalsWhereInput", {
  isAbstract: true
})
export class GoalsWhereInput {
  @TypeGraphQL.Field(_type => [GoalsWhereInput], {
    nullable: true
  })
  AND?: GoalsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GoalsWhereInput], {
    nullable: true
  })
  OR?: GoalsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GoalsWhereInput], {
    nullable: true
  })
  NOT?: GoalsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  winner?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  fulltime?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  halftime?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ExtratimeGoalsNullableCompositeFilter, {
    nullable: true
  })
  extratime?: ExtratimeGoalsNullableCompositeFilter | undefined;
}
