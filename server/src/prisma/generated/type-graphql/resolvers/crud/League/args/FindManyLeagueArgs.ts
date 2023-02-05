import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeagueOrderByWithRelationInput } from "../../../inputs/LeagueOrderByWithRelationInput";
import { LeagueWhereInput } from "../../../inputs/LeagueWhereInput";
import { LeagueWhereUniqueInput } from "../../../inputs/LeagueWhereUniqueInput";
import { LeagueScalarFieldEnum } from "../../../../enums/LeagueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLeagueArgs {
  @TypeGraphQL.Field(_type => LeagueWhereInput, {
    nullable: true
  })
  where?: LeagueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LeagueOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LeagueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LeagueWhereUniqueInput, {
    nullable: true
  })
  cursor?: LeagueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LeagueScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "country" | "type"> | undefined;
}
