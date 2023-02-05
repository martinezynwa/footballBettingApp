import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GoalsCompositeFilter } from "../inputs/GoalsCompositeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("H2HTeamDetailWhereInput", {
  isAbstract: true
})
export class H2HTeamDetailWhereInput {
  @TypeGraphQL.Field(_type => [H2HTeamDetailWhereInput], {
    nullable: true
  })
  AND?: H2HTeamDetailWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HTeamDetailWhereInput], {
    nullable: true
  })
  OR?: H2HTeamDetailWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HTeamDetailWhereInput], {
    nullable: true
  })
  NOT?: H2HTeamDetailWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  teamId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GoalsCompositeFilter, {
    nullable: true
  })
  goals?: GoalsCompositeFilter | undefined;
}
