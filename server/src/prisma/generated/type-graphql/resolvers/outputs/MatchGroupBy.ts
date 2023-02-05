import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MatchAvgAggregate } from "../outputs/MatchAvgAggregate";
import { MatchCountAggregate } from "../outputs/MatchCountAggregate";
import { MatchMaxAggregate } from "../outputs/MatchMaxAggregate";
import { MatchMinAggregate } from "../outputs/MatchMinAggregate";
import { MatchSumAggregate } from "../outputs/MatchSumAggregate";

@TypeGraphQL.ObjectType("MatchGroupBy", {
  isAbstract: true
})
export class MatchGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  date!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  round!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  season!: number;

  @TypeGraphQL.Field(_type => MatchCountAggregate, {
    nullable: true
  })
  _count!: MatchCountAggregate | null;

  @TypeGraphQL.Field(_type => MatchAvgAggregate, {
    nullable: true
  })
  _avg!: MatchAvgAggregate | null;

  @TypeGraphQL.Field(_type => MatchSumAggregate, {
    nullable: true
  })
  _sum!: MatchSumAggregate | null;

  @TypeGraphQL.Field(_type => MatchMinAggregate, {
    nullable: true
  })
  _min!: MatchMinAggregate | null;

  @TypeGraphQL.Field(_type => MatchMaxAggregate, {
    nullable: true
  })
  _max!: MatchMaxAggregate | null;
}
