import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LeagueAvgAggregate } from "../outputs/LeagueAvgAggregate";
import { LeagueCountAggregate } from "../outputs/LeagueCountAggregate";
import { LeagueMaxAggregate } from "../outputs/LeagueMaxAggregate";
import { LeagueMinAggregate } from "../outputs/LeagueMinAggregate";
import { LeagueSumAggregate } from "../outputs/LeagueSumAggregate";

@TypeGraphQL.ObjectType("AggregateLeague", {
  isAbstract: true
})
export class AggregateLeague {
  @TypeGraphQL.Field(_type => LeagueCountAggregate, {
    nullable: true
  })
  _count!: LeagueCountAggregate | null;

  @TypeGraphQL.Field(_type => LeagueAvgAggregate, {
    nullable: true
  })
  _avg!: LeagueAvgAggregate | null;

  @TypeGraphQL.Field(_type => LeagueSumAggregate, {
    nullable: true
  })
  _sum!: LeagueSumAggregate | null;

  @TypeGraphQL.Field(_type => LeagueMinAggregate, {
    nullable: true
  })
  _min!: LeagueMinAggregate | null;

  @TypeGraphQL.Field(_type => LeagueMaxAggregate, {
    nullable: true
  })
  _max!: LeagueMaxAggregate | null;
}
