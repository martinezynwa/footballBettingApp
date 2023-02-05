import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HMatchCreateInput } from "../inputs/H2HMatchCreateInput";
import { H2HMatchDeleteManyInput } from "../inputs/H2HMatchDeleteManyInput";
import { H2HMatchUpdateManyInput } from "../inputs/H2HMatchUpdateManyInput";

@TypeGraphQL.InputType("H2HMatchListUpdateEnvelopeInput", {
  isAbstract: true
})
export class H2HMatchListUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => [H2HMatchCreateInput], {
    nullable: true
  })
  set?: H2HMatchCreateInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HMatchCreateInput], {
    nullable: true
  })
  push?: H2HMatchCreateInput[] | undefined;

  @TypeGraphQL.Field(_type => H2HMatchUpdateManyInput, {
    nullable: true
  })
  updateMany?: H2HMatchUpdateManyInput | undefined;

  @TypeGraphQL.Field(_type => H2HMatchDeleteManyInput, {
    nullable: true
  })
  deleteMany?: H2HMatchDeleteManyInput | undefined;
}
