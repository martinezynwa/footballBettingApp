import * as TypeGraphQL from "type-graphql";

export enum LeagueScalarFieldEnum {
  id = "id",
  name = "name",
  country = "country",
  type = "type"
}
TypeGraphQL.registerEnumType(LeagueScalarFieldEnum, {
  name: "LeagueScalarFieldEnum",
  description: undefined,
});
