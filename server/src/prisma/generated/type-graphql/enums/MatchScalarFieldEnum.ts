import * as TypeGraphQL from "type-graphql";

export enum MatchScalarFieldEnum {
  id = "id",
  status = "status",
  date = "date",
  round = "round",
  season = "season"
}
TypeGraphQL.registerEnumType(MatchScalarFieldEnum, {
  name: "MatchScalarFieldEnum",
  description: undefined,
});
