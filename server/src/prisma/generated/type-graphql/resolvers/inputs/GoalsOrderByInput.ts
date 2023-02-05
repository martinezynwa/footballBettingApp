import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExtratimeGoalsOrderByInput } from "../inputs/ExtratimeGoalsOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GoalsOrderByInput", {
  isAbstract: true
})
export class GoalsOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  winner?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fulltime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  halftime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExtratimeGoalsOrderByInput, {
    nullable: true
  })
  extratime?: ExtratimeGoalsOrderByInput | undefined;
}
