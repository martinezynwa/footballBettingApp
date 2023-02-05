import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeagueUpdateInput } from "../../../inputs/LeagueUpdateInput";
import { LeagueWhereUniqueInput } from "../../../inputs/LeagueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLeagueArgs {
  @TypeGraphQL.Field(_type => LeagueUpdateInput, {
    nullable: false
  })
  data!: LeagueUpdateInput;

  @TypeGraphQL.Field(_type => LeagueWhereUniqueInput, {
    nullable: false
  })
  where!: LeagueWhereUniqueInput;
}
