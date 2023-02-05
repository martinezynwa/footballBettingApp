import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MatchOrderByWithRelationInput } from "../../../inputs/MatchOrderByWithRelationInput";
import { MatchWhereInput } from "../../../inputs/MatchWhereInput";
import { MatchWhereUniqueInput } from "../../../inputs/MatchWhereUniqueInput";
import { MatchScalarFieldEnum } from "../../../../enums/MatchScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMatchOrThrowArgs {
  @TypeGraphQL.Field(_type => MatchWhereInput, {
    nullable: true
  })
  where?: MatchWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MatchOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MatchOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MatchWhereUniqueInput, {
    nullable: true
  })
  cursor?: MatchWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MatchScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "status" | "date" | "round" | "season"> | undefined;
}
