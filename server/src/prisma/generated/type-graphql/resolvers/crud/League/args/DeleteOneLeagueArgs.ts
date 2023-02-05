import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeagueWhereUniqueInput } from "../../../inputs/LeagueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneLeagueArgs {
  @TypeGraphQL.Field(_type => LeagueWhereUniqueInput, {
    nullable: false
  })
  where!: LeagueWhereUniqueInput;
}
