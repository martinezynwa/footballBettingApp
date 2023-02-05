import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { H2HMatch } from "../models/H2HMatch";

@TypeGraphQL.ObjectType("H2H", {
  isAbstract: true
})
export class H2H {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => [H2HMatch], {
    nullable: false
  })
  matches!: H2HMatch[];
}
