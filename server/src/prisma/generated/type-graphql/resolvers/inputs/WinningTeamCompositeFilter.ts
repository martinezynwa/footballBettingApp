import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WinningTeamObjectEqualityInput } from "../inputs/WinningTeamObjectEqualityInput";
import { WinningTeamWhereInput } from "../inputs/WinningTeamWhereInput";

@TypeGraphQL.InputType("WinningTeamCompositeFilter", {
  isAbstract: true
})
export class WinningTeamCompositeFilter {
  @TypeGraphQL.Field(_type => WinningTeamObjectEqualityInput, {
    nullable: true
  })
  equals?: WinningTeamObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => WinningTeamWhereInput, {
    nullable: true
  })
  is?: WinningTeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => WinningTeamWhereInput, {
    nullable: true
  })
  isNot?: WinningTeamWhereInput | undefined;
}
