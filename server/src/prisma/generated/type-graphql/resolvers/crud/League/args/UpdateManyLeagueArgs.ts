import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeagueUpdateManyMutationInput } from "../../../inputs/LeagueUpdateManyMutationInput";
import { LeagueWhereInput } from "../../../inputs/LeagueWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLeagueArgs {
  @TypeGraphQL.Field(_type => LeagueUpdateManyMutationInput, {
    nullable: false
  })
  data!: LeagueUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LeagueWhereInput, {
    nullable: true
  })
  where?: LeagueWhereInput | undefined;
}
