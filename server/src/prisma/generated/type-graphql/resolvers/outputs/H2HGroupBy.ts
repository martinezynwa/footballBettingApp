import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HCountAggregate } from "../outputs/H2HCountAggregate";
import { H2HMaxAggregate } from "../outputs/H2HMaxAggregate";
import { H2HMinAggregate } from "../outputs/H2HMinAggregate";

@TypeGraphQL.ObjectType("H2HGroupBy", {
  isAbstract: true
})
export class H2HGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => H2HCountAggregate, {
    nullable: true
  })
  _count!: H2HCountAggregate | null;

  @TypeGraphQL.Field(_type => H2HMinAggregate, {
    nullable: true
  })
  _min!: H2HMinAggregate | null;

  @TypeGraphQL.Field(_type => H2HMaxAggregate, {
    nullable: true
  })
  _max!: H2HMaxAggregate | null;
}
