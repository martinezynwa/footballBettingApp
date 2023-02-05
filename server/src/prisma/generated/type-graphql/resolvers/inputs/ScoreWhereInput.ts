import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsCompositeFilter } from "../inputs/GoalsCompositeFilter";

@TypeGraphQL.InputType("ScoreWhereInput", {
  isAbstract: true
})
export class ScoreWhereInput {
  @TypeGraphQL.Field(_type => [ScoreWhereInput], {
    nullable: true
  })
  AND?: ScoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScoreWhereInput], {
    nullable: true
  })
  OR?: ScoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScoreWhereInput], {
    nullable: true
  })
  NOT?: ScoreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => GoalsCompositeFilter, {
    nullable: true
  })
  homeTeam?: GoalsCompositeFilter | undefined;

  @TypeGraphQL.Field(_type => GoalsCompositeFilter, {
    nullable: true
  })
  awayTeam?: GoalsCompositeFilter | undefined;
}
