import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HMatchObjectEqualityInput } from "../inputs/H2HMatchObjectEqualityInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("H2HWhereInput", {
  isAbstract: true
})
export class H2HWhereInput {
  @TypeGraphQL.Field(_type => [H2HWhereInput], {
    nullable: true
  })
  AND?: H2HWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HWhereInput], {
    nullable: true
  })
  OR?: H2HWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [H2HWhereInput], {
    nullable: true
  })
  NOT?: H2HWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => [H2HMatchObjectEqualityInput], {
    nullable: true
  })
  matches?: H2HMatchObjectEqualityInput[] | undefined;
}
