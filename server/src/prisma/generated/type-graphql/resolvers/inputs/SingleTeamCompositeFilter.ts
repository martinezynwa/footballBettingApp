import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SingleTeamObjectEqualityInput } from "../inputs/SingleTeamObjectEqualityInput";
import { SingleTeamWhereInput } from "../inputs/SingleTeamWhereInput";

@TypeGraphQL.InputType("SingleTeamCompositeFilter", {
  isAbstract: true
})
export class SingleTeamCompositeFilter {
  @TypeGraphQL.Field(_type => SingleTeamObjectEqualityInput, {
    nullable: true
  })
  equals?: SingleTeamObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => SingleTeamWhereInput, {
    nullable: true
  })
  is?: SingleTeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => SingleTeamWhereInput, {
    nullable: true
  })
  isNot?: SingleTeamWhereInput | undefined;
}
