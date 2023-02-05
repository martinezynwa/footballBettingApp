import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WinningTeamCompositeFilter } from "../inputs/WinningTeamCompositeFilter";

@TypeGraphQL.InputType("MatchOddsWhereInput", {
  isAbstract: true
})
export class MatchOddsWhereInput {
  @TypeGraphQL.Field(_type => [MatchOddsWhereInput], {
    nullable: true
  })
  AND?: MatchOddsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MatchOddsWhereInput], {
    nullable: true
  })
  OR?: MatchOddsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MatchOddsWhereInput], {
    nullable: true
  })
  NOT?: MatchOddsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  fixtureId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastUpdate?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bookmaker?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => WinningTeamCompositeFilter, {
    nullable: true
  })
  winner?: WinningTeamCompositeFilter | undefined;
}
