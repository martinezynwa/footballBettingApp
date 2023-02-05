import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExtratimeGoalsOrderByInput", {
  isAbstract: true
})
export class ExtratimeGoalsOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  extratime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  penalty?: "asc" | "desc" | undefined;
}
