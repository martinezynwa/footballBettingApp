import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeagueCreateInput } from "../../../inputs/LeagueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLeagueArgs {
  @TypeGraphQL.Field(_type => LeagueCreateInput, {
    nullable: false
  })
  data!: LeagueCreateInput;
}
