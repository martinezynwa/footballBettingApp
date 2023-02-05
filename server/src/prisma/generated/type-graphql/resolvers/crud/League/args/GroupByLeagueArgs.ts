import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LeagueOrderByWithAggregationInput } from "../../../inputs/LeagueOrderByWithAggregationInput";
import { LeagueScalarWhereWithAggregatesInput } from "../../../inputs/LeagueScalarWhereWithAggregatesInput";
import { LeagueWhereInput } from "../../../inputs/LeagueWhereInput";
import { LeagueScalarFieldEnum } from "../../../../enums/LeagueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLeagueArgs {
  @TypeGraphQL.Field(_type => LeagueWhereInput, {
    nullable: true
  })
  where?: LeagueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LeagueOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LeagueOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LeagueScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "country" | "type">;

  @TypeGraphQL.Field(_type => LeagueScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LeagueScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
