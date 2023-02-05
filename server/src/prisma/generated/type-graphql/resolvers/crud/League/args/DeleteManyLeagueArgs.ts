import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeagueWhereInput } from "../../../inputs/LeagueWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLeagueArgs {
  @TypeGraphQL.Field(_type => LeagueWhereInput, {
    nullable: true
  })
  where?: LeagueWhereInput | undefined;
}
