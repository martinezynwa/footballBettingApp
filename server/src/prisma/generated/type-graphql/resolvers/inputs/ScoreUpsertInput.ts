import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScoreCreateInput } from "../inputs/ScoreCreateInput";
import { ScoreUpdateInput } from "../inputs/ScoreUpdateInput";

@TypeGraphQL.InputType("ScoreUpsertInput", {
  isAbstract: true
})
export class ScoreUpsertInput {
  @TypeGraphQL.Field(_type => ScoreCreateInput, {
    nullable: false
  })
  set!: ScoreCreateInput;

  @TypeGraphQL.Field(_type => ScoreUpdateInput, {
    nullable: false
  })
  update!: ScoreUpdateInput;
}
