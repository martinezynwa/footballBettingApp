import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SingleTeamWhereInput", {
  isAbstract: true
})
export class SingleTeamWhereInput {
  @TypeGraphQL.Field(_type => [SingleTeamWhereInput], {
    nullable: true
  })
  AND?: SingleTeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SingleTeamWhereInput], {
    nullable: true
  })
  OR?: SingleTeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SingleTeamWhereInput], {
    nullable: true
  })
  NOT?: SingleTeamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  logo?: StringFilter | undefined;
}
