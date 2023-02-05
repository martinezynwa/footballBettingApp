import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HTeamDetailObjectEqualityInput } from "../inputs/H2HTeamDetailObjectEqualityInput";
import { H2HTeamDetailWhereInput } from "../inputs/H2HTeamDetailWhereInput";

@TypeGraphQL.InputType("H2HTeamDetailCompositeFilter", {
  isAbstract: true
})
export class H2HTeamDetailCompositeFilter {
  @TypeGraphQL.Field(_type => H2HTeamDetailObjectEqualityInput, {
    nullable: true
  })
  equals?: H2HTeamDetailObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => H2HTeamDetailWhereInput, {
    nullable: true
  })
  is?: H2HTeamDetailWhereInput | undefined;

  @TypeGraphQL.Field(_type => H2HTeamDetailWhereInput, {
    nullable: true
  })
  isNot?: H2HTeamDetailWhereInput | undefined;
}
