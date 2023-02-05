import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WinningTeamOrderByInput } from "../inputs/WinningTeamOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MatchOddsOrderByInput", {
  isAbstract: true
})
export class MatchOddsOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fixtureId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastUpdate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookmaker?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => WinningTeamOrderByInput, {
    nullable: true
  })
  winner?: WinningTeamOrderByInput | undefined;
}
