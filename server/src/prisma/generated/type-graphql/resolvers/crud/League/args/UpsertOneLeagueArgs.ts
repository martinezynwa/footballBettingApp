import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeagueCreateInput } from "../../../inputs/LeagueCreateInput";
import { LeagueUpdateInput } from "../../../inputs/LeagueUpdateInput";
import { LeagueWhereUniqueInput } from "../../../inputs/LeagueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLeagueArgs {
  @TypeGraphQL.Field(_type => LeagueWhereUniqueInput, {
    nullable: false
  })
  where!: LeagueWhereUniqueInput;

  @TypeGraphQL.Field(_type => LeagueCreateInput, {
    nullable: false
  })
  create!: LeagueCreateInput;

  @TypeGraphQL.Field(_type => LeagueUpdateInput, {
    nullable: false
  })
  update!: LeagueUpdateInput;
}
