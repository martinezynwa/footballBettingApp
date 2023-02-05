import * as TypeGraphQL from "type-graphql";

export enum TeamScalarFieldEnum {
  id = "id",
  leagueId = "leagueId",
  leagueName = "leagueName",
  name = "name",
  code = "code",
  country = "country",
  logo = "logo",
  national = "national"
}
TypeGraphQL.registerEnumType(TeamScalarFieldEnum, {
  name: "TeamScalarFieldEnum",
  description: undefined,
});
