import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { H2HMatchObjectEqualityInput } from "../inputs/H2HMatchObjectEqualityInput";
import { H2HMatchWhereInput } from "../inputs/H2HMatchWhereInput";

@TypeGraphQL.InputType("H2HMatchCompositeListFilter", {
  isAbstract: true
})
export class H2HMatchCompositeListFilter {
  @TypeGraphQL.Field(_type => [H2HMatchObjectEqualityInput], {
    nullable: true
  })
  equals?: H2HMatchObjectEqualityInput[] | undefined;

  @TypeGraphQL.Field(_type => H2HMatchWhereInput, {
    nullable: true
  })
  every?: H2HMatchWhereInput | undefined;

  @TypeGraphQL.Field(_type => H2HMatchWhereInput, {
    nullable: true
  })
  some?: H2HMatchWhereInput | undefined;

  @TypeGraphQL.Field(_type => H2HMatchWhereInput, {
    nullable: true
  })
  none?: H2HMatchWhereInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
