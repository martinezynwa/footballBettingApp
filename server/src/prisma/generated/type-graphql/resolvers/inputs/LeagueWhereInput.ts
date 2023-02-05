import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LeagueWhereInput", {
  isAbstract: true
})
export class LeagueWhereInput {
  @TypeGraphQL.Field(_type => [LeagueWhereInput], {
    nullable: true
  })
  AND?: LeagueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LeagueWhereInput], {
    nullable: true
  })
  OR?: LeagueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LeagueWhereInput], {
    nullable: true
  })
  NOT?: LeagueWhereInput[] | undefined;

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
  country?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;
}
