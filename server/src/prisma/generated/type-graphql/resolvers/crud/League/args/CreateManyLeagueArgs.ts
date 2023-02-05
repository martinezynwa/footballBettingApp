import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeagueCreateManyInput } from "../../../inputs/LeagueCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLeagueArgs {
  @TypeGraphQL.Field(_type => [LeagueCreateManyInput], {
    nullable: false
  })
  data!: LeagueCreateManyInput[];
}
