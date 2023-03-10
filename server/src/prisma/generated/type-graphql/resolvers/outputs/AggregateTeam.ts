import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamAvgAggregate } from "../outputs/TeamAvgAggregate";
import { TeamCountAggregate } from "../outputs/TeamCountAggregate";
import { TeamMaxAggregate } from "../outputs/TeamMaxAggregate";
import { TeamMinAggregate } from "../outputs/TeamMinAggregate";
import { TeamSumAggregate } from "../outputs/TeamSumAggregate";

@TypeGraphQL.ObjectType("AggregateTeam", {
  isAbstract: true
})
export class AggregateTeam {
  @TypeGraphQL.Field(_type => TeamCountAggregate, {
    nullable: true
  })
  _count!: TeamCountAggregate | null;

  @TypeGraphQL.Field(_type => TeamAvgAggregate, {
    nullable: true
  })
  _avg!: TeamAvgAggregate | null;

  @TypeGraphQL.Field(_type => TeamSumAggregate, {
    nullable: true
  })
  _sum!: TeamSumAggregate | null;

  @TypeGraphQL.Field(_type => TeamMinAggregate, {
    nullable: true
  })
  _min!: TeamMinAggregate | null;

  @TypeGraphQL.Field(_type => TeamMaxAggregate, {
    nullable: true
  })
  _max!: TeamMaxAggregate | null;
}
