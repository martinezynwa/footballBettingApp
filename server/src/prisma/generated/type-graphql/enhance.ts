import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Account: crudResolvers.AccountCrudResolver,
  Session: crudResolvers.SessionCrudResolver,
  User: crudResolvers.UserCrudResolver,
  VerificationToken: crudResolvers.VerificationTokenCrudResolver,
  League: crudResolvers.LeagueCrudResolver,
  Team: crudResolvers.TeamCrudResolver,
  Match: crudResolvers.MatchCrudResolver,
  H2H: crudResolvers.H2HCrudResolver
};
const actionResolversMap = {
  Account: {
    aggregateAccount: actionResolvers.AggregateAccountResolver,
    createManyAccount: actionResolvers.CreateManyAccountResolver,
    createOneAccount: actionResolvers.CreateOneAccountResolver,
    deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
    deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
    findFirstAccount: actionResolvers.FindFirstAccountResolver,
    findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
    accounts: actionResolvers.FindManyAccountResolver,
    account: actionResolvers.FindUniqueAccountResolver,
    getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
    groupByAccount: actionResolvers.GroupByAccountResolver,
    updateManyAccount: actionResolvers.UpdateManyAccountResolver,
    updateOneAccount: actionResolvers.UpdateOneAccountResolver,
    upsertOneAccount: actionResolvers.UpsertOneAccountResolver
  },
  Session: {
    aggregateSession: actionResolvers.AggregateSessionResolver,
    createManySession: actionResolvers.CreateManySessionResolver,
    createOneSession: actionResolvers.CreateOneSessionResolver,
    deleteManySession: actionResolvers.DeleteManySessionResolver,
    deleteOneSession: actionResolvers.DeleteOneSessionResolver,
    findFirstSession: actionResolvers.FindFirstSessionResolver,
    findFirstSessionOrThrow: actionResolvers.FindFirstSessionOrThrowResolver,
    sessions: actionResolvers.FindManySessionResolver,
    session: actionResolvers.FindUniqueSessionResolver,
    getSession: actionResolvers.FindUniqueSessionOrThrowResolver,
    groupBySession: actionResolvers.GroupBySessionResolver,
    updateManySession: actionResolvers.UpdateManySessionResolver,
    updateOneSession: actionResolvers.UpdateOneSessionResolver,
    upsertOneSession: actionResolvers.UpsertOneSessionResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  VerificationToken: {
    aggregateVerificationToken: actionResolvers.AggregateVerificationTokenResolver,
    createManyVerificationToken: actionResolvers.CreateManyVerificationTokenResolver,
    createOneVerificationToken: actionResolvers.CreateOneVerificationTokenResolver,
    deleteManyVerificationToken: actionResolvers.DeleteManyVerificationTokenResolver,
    deleteOneVerificationToken: actionResolvers.DeleteOneVerificationTokenResolver,
    findFirstVerificationToken: actionResolvers.FindFirstVerificationTokenResolver,
    findFirstVerificationTokenOrThrow: actionResolvers.FindFirstVerificationTokenOrThrowResolver,
    verificationTokens: actionResolvers.FindManyVerificationTokenResolver,
    verificationToken: actionResolvers.FindUniqueVerificationTokenResolver,
    getVerificationToken: actionResolvers.FindUniqueVerificationTokenOrThrowResolver,
    groupByVerificationToken: actionResolvers.GroupByVerificationTokenResolver,
    updateManyVerificationToken: actionResolvers.UpdateManyVerificationTokenResolver,
    updateOneVerificationToken: actionResolvers.UpdateOneVerificationTokenResolver,
    upsertOneVerificationToken: actionResolvers.UpsertOneVerificationTokenResolver
  },
  League: {
    aggregateLeague: actionResolvers.AggregateLeagueResolver,
    createManyLeague: actionResolvers.CreateManyLeagueResolver,
    createOneLeague: actionResolvers.CreateOneLeagueResolver,
    deleteManyLeague: actionResolvers.DeleteManyLeagueResolver,
    deleteOneLeague: actionResolvers.DeleteOneLeagueResolver,
    findFirstLeague: actionResolvers.FindFirstLeagueResolver,
    findFirstLeagueOrThrow: actionResolvers.FindFirstLeagueOrThrowResolver,
    leagues: actionResolvers.FindManyLeagueResolver,
    league: actionResolvers.FindUniqueLeagueResolver,
    getLeague: actionResolvers.FindUniqueLeagueOrThrowResolver,
    groupByLeague: actionResolvers.GroupByLeagueResolver,
    updateManyLeague: actionResolvers.UpdateManyLeagueResolver,
    updateOneLeague: actionResolvers.UpdateOneLeagueResolver,
    upsertOneLeague: actionResolvers.UpsertOneLeagueResolver
  },
  Team: {
    aggregateTeam: actionResolvers.AggregateTeamResolver,
    createManyTeam: actionResolvers.CreateManyTeamResolver,
    createOneTeam: actionResolvers.CreateOneTeamResolver,
    deleteManyTeam: actionResolvers.DeleteManyTeamResolver,
    deleteOneTeam: actionResolvers.DeleteOneTeamResolver,
    findFirstTeam: actionResolvers.FindFirstTeamResolver,
    findFirstTeamOrThrow: actionResolvers.FindFirstTeamOrThrowResolver,
    teams: actionResolvers.FindManyTeamResolver,
    team: actionResolvers.FindUniqueTeamResolver,
    getTeam: actionResolvers.FindUniqueTeamOrThrowResolver,
    groupByTeam: actionResolvers.GroupByTeamResolver,
    updateManyTeam: actionResolvers.UpdateManyTeamResolver,
    updateOneTeam: actionResolvers.UpdateOneTeamResolver,
    upsertOneTeam: actionResolvers.UpsertOneTeamResolver
  },
  Match: {
    aggregateMatch: actionResolvers.AggregateMatchResolver,
    createManyMatch: actionResolvers.CreateManyMatchResolver,
    createOneMatch: actionResolvers.CreateOneMatchResolver,
    deleteManyMatch: actionResolvers.DeleteManyMatchResolver,
    deleteOneMatch: actionResolvers.DeleteOneMatchResolver,
    findFirstMatch: actionResolvers.FindFirstMatchResolver,
    findFirstMatchOrThrow: actionResolvers.FindFirstMatchOrThrowResolver,
    matches: actionResolvers.FindManyMatchResolver,
    match: actionResolvers.FindUniqueMatchResolver,
    getMatch: actionResolvers.FindUniqueMatchOrThrowResolver,
    groupByMatch: actionResolvers.GroupByMatchResolver,
    updateManyMatch: actionResolvers.UpdateManyMatchResolver,
    updateOneMatch: actionResolvers.UpdateOneMatchResolver,
    upsertOneMatch: actionResolvers.UpsertOneMatchResolver
  },
  H2H: {
    aggregateH2H: actionResolvers.AggregateH2HResolver,
    createManyH2H: actionResolvers.CreateManyH2HResolver,
    createOneH2H: actionResolvers.CreateOneH2HResolver,
    deleteManyH2H: actionResolvers.DeleteManyH2HResolver,
    deleteOneH2H: actionResolvers.DeleteOneH2HResolver,
    findFirstH2H: actionResolvers.FindFirstH2HResolver,
    findFirstH2HOrThrow: actionResolvers.FindFirstH2HOrThrowResolver,
    h2HS: actionResolvers.FindManyH2HResolver,
    h2H: actionResolvers.FindUniqueH2HResolver,
    getH2H: actionResolvers.FindUniqueH2HOrThrowResolver,
    groupByH2H: actionResolvers.GroupByH2HResolver,
    updateManyH2H: actionResolvers.UpdateManyH2HResolver,
    updateOneH2H: actionResolvers.UpdateOneH2HResolver,
    upsertOneH2H: actionResolvers.UpsertOneH2HResolver
  }
};
const crudResolversInfo = {
  Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
  Session: ["aggregateSession", "createManySession", "createOneSession", "deleteManySession", "deleteOneSession", "findFirstSession", "findFirstSessionOrThrow", "sessions", "session", "getSession", "groupBySession", "updateManySession", "updateOneSession", "upsertOneSession"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  VerificationToken: ["aggregateVerificationToken", "createManyVerificationToken", "createOneVerificationToken", "deleteManyVerificationToken", "deleteOneVerificationToken", "findFirstVerificationToken", "findFirstVerificationTokenOrThrow", "verificationTokens", "verificationToken", "getVerificationToken", "groupByVerificationToken", "updateManyVerificationToken", "updateOneVerificationToken", "upsertOneVerificationToken"],
  League: ["aggregateLeague", "createManyLeague", "createOneLeague", "deleteManyLeague", "deleteOneLeague", "findFirstLeague", "findFirstLeagueOrThrow", "leagues", "league", "getLeague", "groupByLeague", "updateManyLeague", "updateOneLeague", "upsertOneLeague"],
  Team: ["aggregateTeam", "createManyTeam", "createOneTeam", "deleteManyTeam", "deleteOneTeam", "findFirstTeam", "findFirstTeamOrThrow", "teams", "team", "getTeam", "groupByTeam", "updateManyTeam", "updateOneTeam", "upsertOneTeam"],
  Match: ["aggregateMatch", "createManyMatch", "createOneMatch", "deleteManyMatch", "deleteOneMatch", "findFirstMatch", "findFirstMatchOrThrow", "matches", "match", "getMatch", "groupByMatch", "updateManyMatch", "updateOneMatch", "upsertOneMatch"],
  H2H: ["aggregateH2H", "createManyH2H", "createOneH2H", "deleteManyH2H", "deleteOneH2H", "findFirstH2H", "findFirstH2HOrThrow", "h2HS", "h2H", "getH2H", "groupByH2H", "updateManyH2H", "updateOneH2H", "upsertOneH2H"]
};
const argsInfo = {
  AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAccountArgs: ["data"],
  CreateOneAccountArgs: ["data"],
  DeleteManyAccountArgs: ["where"],
  DeleteOneAccountArgs: ["where"],
  FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAccountArgs: ["where"],
  FindUniqueAccountOrThrowArgs: ["where"],
  GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAccountArgs: ["data", "where"],
  UpdateOneAccountArgs: ["data", "where"],
  UpsertOneAccountArgs: ["where", "create", "update"],
  AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySessionArgs: ["data"],
  CreateOneSessionArgs: ["data"],
  DeleteManySessionArgs: ["where"],
  DeleteOneSessionArgs: ["where"],
  FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSessionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSessionArgs: ["where"],
  FindUniqueSessionOrThrowArgs: ["where"],
  GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySessionArgs: ["data", "where"],
  UpdateOneSessionArgs: ["data", "where"],
  UpsertOneSessionArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVerificationTokenArgs: ["data"],
  CreateOneVerificationTokenArgs: ["data"],
  DeleteManyVerificationTokenArgs: ["where"],
  DeleteOneVerificationTokenArgs: ["where"],
  FindFirstVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVerificationTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVerificationTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVerificationTokenArgs: ["where"],
  FindUniqueVerificationTokenOrThrowArgs: ["where"],
  GroupByVerificationTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVerificationTokenArgs: ["data", "where"],
  UpdateOneVerificationTokenArgs: ["data", "where"],
  UpsertOneVerificationTokenArgs: ["where", "create", "update"],
  AggregateLeagueArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyLeagueArgs: ["data"],
  CreateOneLeagueArgs: ["data"],
  DeleteManyLeagueArgs: ["where"],
  DeleteOneLeagueArgs: ["where"],
  FindFirstLeagueArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstLeagueOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyLeagueArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueLeagueArgs: ["where"],
  FindUniqueLeagueOrThrowArgs: ["where"],
  GroupByLeagueArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyLeagueArgs: ["data", "where"],
  UpdateOneLeagueArgs: ["data", "where"],
  UpsertOneLeagueArgs: ["where", "create", "update"],
  AggregateTeamArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTeamArgs: ["data"],
  CreateOneTeamArgs: ["data"],
  DeleteManyTeamArgs: ["where"],
  DeleteOneTeamArgs: ["where"],
  FindFirstTeamArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTeamOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTeamArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTeamArgs: ["where"],
  FindUniqueTeamOrThrowArgs: ["where"],
  GroupByTeamArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTeamArgs: ["data", "where"],
  UpdateOneTeamArgs: ["data", "where"],
  UpsertOneTeamArgs: ["where", "create", "update"],
  AggregateMatchArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMatchArgs: ["data"],
  CreateOneMatchArgs: ["data"],
  DeleteManyMatchArgs: ["where"],
  DeleteOneMatchArgs: ["where"],
  FindFirstMatchArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMatchOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMatchArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMatchArgs: ["where"],
  FindUniqueMatchOrThrowArgs: ["where"],
  GroupByMatchArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMatchArgs: ["data", "where"],
  UpdateOneMatchArgs: ["data", "where"],
  UpsertOneMatchArgs: ["where", "create", "update"],
  AggregateH2HArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyH2HArgs: ["data"],
  CreateOneH2HArgs: ["data"],
  DeleteManyH2HArgs: ["where"],
  DeleteOneH2HArgs: ["where"],
  FindFirstH2HArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstH2HOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyH2HArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueH2HArgs: ["where"],
  FindUniqueH2HOrThrowArgs: ["where"],
  GroupByH2HArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyH2HArgs: ["data", "where"],
  UpdateOneH2HArgs: ["data", "where"],
  UpsertOneH2HArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Account: relationResolvers.AccountRelationsResolver,
  Session: relationResolvers.SessionRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
  Account: ["user"],
  Session: ["user"],
  User: ["accounts", "sessions"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Account: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  Session: ["id", "sessionToken", "userId", "expires"],
  User: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt"],
  VerificationToken: ["id", "identifier", "token", "expires"],
  League: ["id", "name", "country", "type"],
  Team: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  Match: ["id", "status", "date", "round", "season", "homeTeam", "awayTeam", "odds", "score"],
  H2H: ["id", "matches"],
  SingleTeam: ["id", "name", "logo"],
  MatchOdds: ["fixtureId", "lastUpdate", "bookmaker", "winner"],
  WinningTeam: ["home", "draw", "away"],
  Score: ["homeTeam", "awayTeam"],
  H2HMatch: ["matchId", "leagueId", "date", "season", "homeTeam", "awayTeam"],
  H2HTeamDetail: ["teamId", "goals"],
  Goals: ["winner", "fulltime", "halftime", "extratime"],
  ExtratimeGoals: ["extratime", "penalty"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateAccount: ["_count", "_avg", "_sum", "_min", "_max"],
  AccountGroupBy: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSession: ["_count", "_min", "_max"],
  SessionGroupBy: ["id", "sessionToken", "userId", "expires", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateVerificationToken: ["_count", "_min", "_max"],
  VerificationTokenGroupBy: ["id", "identifier", "token", "expires", "_count", "_min", "_max"],
  AggregateLeague: ["_count", "_avg", "_sum", "_min", "_max"],
  LeagueGroupBy: ["id", "name", "country", "type", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTeam: ["_count", "_avg", "_sum", "_min", "_max"],
  TeamGroupBy: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMatch: ["_count", "_avg", "_sum", "_min", "_max"],
  MatchGroupBy: ["id", "status", "date", "round", "season", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateH2H: ["_count", "_min", "_max"],
  H2HGroupBy: ["id", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  AccountCountAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_all"],
  AccountAvgAggregate: ["expires_at"],
  AccountSumAggregate: ["expires_at"],
  AccountMinAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMaxAggregate: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCountAggregate: ["id", "sessionToken", "userId", "expires", "_all"],
  SessionMinAggregate: ["id", "sessionToken", "userId", "expires"],
  SessionMaxAggregate: ["id", "sessionToken", "userId", "expires"],
  UserCount: ["accounts", "sessions"],
  UserCountAggregate: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt", "_all"],
  UserMinAggregate: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt"],
  VerificationTokenCountAggregate: ["id", "identifier", "token", "expires", "_all"],
  VerificationTokenMinAggregate: ["id", "identifier", "token", "expires"],
  VerificationTokenMaxAggregate: ["id", "identifier", "token", "expires"],
  LeagueCountAggregate: ["id", "name", "country", "type", "_all"],
  LeagueAvgAggregate: ["id"],
  LeagueSumAggregate: ["id"],
  LeagueMinAggregate: ["id", "name", "country", "type"],
  LeagueMaxAggregate: ["id", "name", "country", "type"],
  TeamCountAggregate: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national", "_all"],
  TeamAvgAggregate: ["id", "leagueId"],
  TeamSumAggregate: ["id", "leagueId"],
  TeamMinAggregate: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  TeamMaxAggregate: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  MatchCountAggregate: ["id", "status", "date", "round", "season", "_all"],
  MatchAvgAggregate: ["id", "season"],
  MatchSumAggregate: ["id", "season"],
  MatchMinAggregate: ["id", "status", "date", "round", "season"],
  MatchMaxAggregate: ["id", "status", "date", "round", "season"],
  H2HCountAggregate: ["id", "_all"],
  H2HMinAggregate: ["id"],
  H2HMaxAggregate: ["id"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountOrderByWithRelationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountWhereUniqueInput: ["id", "provider_providerAccountId"],
  AccountOrderByWithAggregationInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "_count", "_avg", "_max", "_min", "_sum"],
  AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires", "user"],
  SessionOrderByWithRelationInput: ["id", "sessionToken", "userId", "expires", "user"],
  SessionWhereUniqueInput: ["id", "sessionToken"],
  SessionOrderByWithAggregationInput: ["id", "sessionToken", "userId", "expires", "_count", "_max", "_min"],
  SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "username", "accounts", "sessions", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "name", "email", "emailVerified", "image", "username", "accounts", "sessions", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email", "username"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt"],
  VerificationTokenWhereInput: ["AND", "OR", "NOT", "id", "identifier", "token", "expires"],
  VerificationTokenOrderByWithRelationInput: ["id", "identifier", "token", "expires"],
  VerificationTokenWhereUniqueInput: ["id", "token", "identifier_token"],
  VerificationTokenOrderByWithAggregationInput: ["id", "identifier", "token", "expires", "_count", "_max", "_min"],
  VerificationTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "identifier", "token", "expires"],
  LeagueWhereInput: ["AND", "OR", "NOT", "id", "name", "country", "type"],
  LeagueOrderByWithRelationInput: ["id", "name", "country", "type"],
  LeagueWhereUniqueInput: ["id"],
  LeagueOrderByWithAggregationInput: ["id", "name", "country", "type", "_count", "_avg", "_max", "_min", "_sum"],
  LeagueScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "country", "type"],
  TeamWhereInput: ["AND", "OR", "NOT", "id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  TeamOrderByWithRelationInput: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  TeamWhereUniqueInput: ["id"],
  TeamOrderByWithAggregationInput: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national", "_count", "_avg", "_max", "_min", "_sum"],
  TeamScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  MatchWhereInput: ["AND", "OR", "NOT", "id", "status", "date", "round", "season", "homeTeam", "awayTeam", "odds", "score"],
  MatchOrderByWithRelationInput: ["id", "status", "date", "round", "season", "homeTeam", "awayTeam", "odds", "score"],
  MatchWhereUniqueInput: ["id"],
  MatchOrderByWithAggregationInput: ["id", "status", "date", "round", "season", "_count", "_avg", "_max", "_min", "_sum"],
  MatchScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "status", "date", "round", "season"],
  H2HWhereInput: ["AND", "OR", "NOT", "id", "matches"],
  H2HOrderByWithRelationInput: ["id", "matches"],
  H2HWhereUniqueInput: ["id"],
  H2HOrderByWithAggregationInput: ["id", "_count", "_max", "_min"],
  H2HScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id"],
  AccountCreateInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountUpdateInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state", "user"],
  AccountCreateManyInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountUpdateManyMutationInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateInput: ["id", "sessionToken", "expires", "user"],
  SessionUpdateInput: ["sessionToken", "expires", "user"],
  SessionCreateManyInput: ["id", "sessionToken", "userId", "expires"],
  SessionUpdateManyMutationInput: ["sessionToken", "expires"],
  UserCreateInput: ["id", "name", "email", "emailVerified", "image", "username", "accounts", "sessions", "createdAt", "updatedAt"],
  UserUpdateInput: ["name", "email", "emailVerified", "image", "username", "accounts", "sessions", "createdAt", "updatedAt"],
  UserCreateManyInput: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt"],
  VerificationTokenCreateInput: ["id", "identifier", "token", "expires"],
  VerificationTokenUpdateInput: ["identifier", "token", "expires"],
  VerificationTokenCreateManyInput: ["id", "identifier", "token", "expires"],
  VerificationTokenUpdateManyMutationInput: ["identifier", "token", "expires"],
  LeagueCreateInput: ["id", "name", "country", "type"],
  LeagueUpdateInput: ["name", "country", "type"],
  LeagueCreateManyInput: ["id", "name", "country", "type"],
  LeagueUpdateManyMutationInput: ["name", "country", "type"],
  TeamCreateInput: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  TeamUpdateInput: ["leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  TeamCreateManyInput: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  TeamUpdateManyMutationInput: ["leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  MatchCreateInput: ["id", "status", "date", "round", "season", "homeTeam", "awayTeam", "odds", "score"],
  MatchUpdateInput: ["status", "date", "round", "season", "homeTeam", "awayTeam", "odds", "score"],
  MatchCreateManyInput: ["id", "status", "date", "round", "season", "homeTeam", "awayTeam", "odds", "score"],
  MatchUpdateManyMutationInput: ["status", "date", "round", "season", "homeTeam", "awayTeam", "odds", "score"],
  H2HCreateInput: ["id", "matches"],
  H2HUpdateInput: ["matches"],
  H2HCreateManyInput: ["id", "matches"],
  H2HUpdateManyMutationInput: ["matches"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  UserRelationFilter: ["is", "isNot"],
  AccountProviderProviderAccountIdCompoundUniqueInput: ["provider", "providerAccountId"],
  AccountCountOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountAvgOrderByAggregateInput: ["expires_at"],
  AccountMaxOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountMinOrderByAggregateInput: ["id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountSumOrderByAggregateInput: ["expires_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SessionCountOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMaxOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  SessionMinOrderByAggregateInput: ["id", "sessionToken", "userId", "expires"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolNullableFilter: ["equals", "not", "isSet"],
  AccountListRelationFilter: ["every", "some", "none"],
  SessionListRelationFilter: ["every", "some", "none"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  AccountOrderByRelationAggregateInput: ["_count"],
  SessionOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "emailVerified", "image", "username", "createdAt", "updatedAt"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max", "isSet"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  VerificationTokenIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
  VerificationTokenCountOrderByAggregateInput: ["id", "identifier", "token", "expires"],
  VerificationTokenMaxOrderByAggregateInput: ["id", "identifier", "token", "expires"],
  VerificationTokenMinOrderByAggregateInput: ["id", "identifier", "token", "expires"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  LeagueCountOrderByAggregateInput: ["id", "name", "country", "type"],
  LeagueAvgOrderByAggregateInput: ["id"],
  LeagueMaxOrderByAggregateInput: ["id", "name", "country", "type"],
  LeagueMinOrderByAggregateInput: ["id", "name", "country", "type"],
  LeagueSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  TeamCountOrderByAggregateInput: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  TeamAvgOrderByAggregateInput: ["id", "leagueId"],
  TeamMaxOrderByAggregateInput: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  TeamMinOrderByAggregateInput: ["id", "leagueId", "leagueName", "name", "code", "country", "logo", "national"],
  TeamSumOrderByAggregateInput: ["id", "leagueId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  SingleTeamCompositeFilter: ["equals", "is", "isNot"],
  SingleTeamObjectEqualityInput: ["id", "name", "logo"],
  MatchOddsNullableCompositeFilter: ["equals", "is", "isNot", "isSet"],
  MatchOddsObjectEqualityInput: ["fixtureId", "lastUpdate", "bookmaker", "winner"],
  ScoreNullableCompositeFilter: ["equals", "is", "isNot", "isSet"],
  ScoreObjectEqualityInput: ["homeTeam", "awayTeam"],
  SingleTeamOrderByInput: ["id", "name", "logo"],
  MatchOddsOrderByInput: ["fixtureId", "lastUpdate", "bookmaker", "winner"],
  ScoreOrderByInput: ["homeTeam", "awayTeam"],
  MatchCountOrderByAggregateInput: ["id", "status", "date", "round", "season"],
  MatchAvgOrderByAggregateInput: ["id", "season"],
  MatchMaxOrderByAggregateInput: ["id", "status", "date", "round", "season"],
  MatchMinOrderByAggregateInput: ["id", "status", "date", "round", "season"],
  MatchSumOrderByAggregateInput: ["id", "season"],
  H2HMatchCompositeListFilter: ["equals", "every", "some", "none", "isEmpty", "isSet"],
  H2HMatchObjectEqualityInput: ["matchId", "leagueId", "date", "season", "homeTeam", "awayTeam"],
  H2HMatchOrderByCompositeAggregateInput: ["_count"],
  H2HCountOrderByAggregateInput: ["id"],
  H2HMaxOrderByAggregateInput: ["id"],
  H2HMinOrderByAggregateInput: ["id"],
  UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide", "unset"],
  UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutSessionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableBoolFieldUpdateOperationsInput: ["set", "unset"],
  AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SessionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableDateTimeFieldUpdateOperationsInput: ["set", "unset"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  SingleTeamCreateEnvelopeInput: ["set"],
  SingleTeamCreateInput: ["id", "name", "logo"],
  MatchOddsNullableCreateEnvelopeInput: ["set"],
  MatchOddsCreateInput: ["fixtureId", "lastUpdate", "bookmaker", "winner"],
  ScoreNullableCreateEnvelopeInput: ["set"],
  ScoreCreateInput: ["homeTeam", "awayTeam"],
  SingleTeamUpdateEnvelopeInput: ["set", "update"],
  MatchOddsNullableUpdateEnvelopeInput: ["set", "upsert", "unset"],
  ScoreNullableUpdateEnvelopeInput: ["set", "upsert", "unset"],
  H2HMatchListCreateEnvelopeInput: ["set"],
  H2HMatchCreateInput: ["matchId", "leagueId", "date", "season", "homeTeam", "awayTeam"],
  H2HMatchListUpdateEnvelopeInput: ["set", "push", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolNullableFilter: ["equals", "not", "isSet"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max", "isSet"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  SingleTeamWhereInput: ["AND", "OR", "NOT", "id", "name", "logo"],
  MatchOddsWhereInput: ["AND", "OR", "NOT", "fixtureId", "lastUpdate", "bookmaker", "winner"],
  WinningTeamObjectEqualityInput: ["home", "draw", "away"],
  ScoreWhereInput: ["AND", "OR", "NOT", "homeTeam", "awayTeam"],
  GoalsObjectEqualityInput: ["winner", "fulltime", "halftime", "extratime"],
  WinningTeamOrderByInput: ["home", "draw", "away"],
  GoalsOrderByInput: ["winner", "fulltime", "halftime", "extratime"],
  H2HMatchWhereInput: ["AND", "OR", "NOT", "matchId", "leagueId", "date", "season", "homeTeam", "awayTeam"],
  H2HTeamDetailObjectEqualityInput: ["teamId", "goals"],
  UserCreateWithoutAccountsInput: ["id", "name", "email", "emailVerified", "image", "username", "sessions", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
  UserUpsertWithoutAccountsInput: ["update", "create"],
  UserUpdateWithoutAccountsInput: ["name", "email", "emailVerified", "image", "username", "sessions", "createdAt", "updatedAt"],
  UserCreateWithoutSessionsInput: ["id", "name", "email", "emailVerified", "image", "username", "accounts", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
  UserUpsertWithoutSessionsInput: ["update", "create"],
  UserUpdateWithoutSessionsInput: ["name", "email", "emailVerified", "image", "username", "accounts", "createdAt", "updatedAt"],
  AccountCreateWithoutUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  AccountCreateOrConnectWithoutUserInput: ["where", "create"],
  AccountCreateManyUserInputEnvelope: ["data"],
  SessionCreateWithoutUserInput: ["id", "sessionToken", "expires"],
  SessionCreateOrConnectWithoutUserInput: ["where", "create"],
  SessionCreateManyUserInputEnvelope: ["data"],
  AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "sessionToken", "userId", "expires"],
  WinningTeamCreateInput: ["home", "draw", "away"],
  GoalsCreateInput: ["winner", "fulltime", "halftime", "extratime"],
  SingleTeamUpdateInput: ["id", "name", "logo"],
  MatchOddsUpsertInput: ["set", "update"],
  ScoreUpsertInput: ["set", "update"],
  H2HTeamDetailCreateInput: ["teamId", "goals"],
  H2HMatchUpdateManyInput: ["where", "data"],
  H2HMatchDeleteManyInput: ["where"],
  WinningTeamCompositeFilter: ["equals", "is", "isNot"],
  GoalsCompositeFilter: ["equals", "is", "isNot"],
  ExtratimeGoalsObjectEqualityInput: ["extratime", "penalty"],
  ExtratimeGoalsOrderByInput: ["extratime", "penalty"],
  H2HTeamDetailCompositeFilter: ["equals", "is", "isNot"],
  AccountCreateManyUserInput: ["id", "type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionCreateManyUserInput: ["id", "sessionToken", "expires"],
  AccountUpdateWithoutUserInput: ["type", "provider", "providerAccountId", "refresh_token", "access_token", "expires_at", "token_type", "scope", "id_token", "session_state"],
  SessionUpdateWithoutUserInput: ["sessionToken", "expires"],
  ExtratimeGoalsCreateInput: ["extratime", "penalty"],
  MatchOddsUpdateInput: ["fixtureId", "lastUpdate", "bookmaker", "winner"],
  ScoreUpdateInput: ["homeTeam", "awayTeam"],
  H2HMatchUpdateInput: ["matchId", "leagueId", "date", "season", "homeTeam", "awayTeam"],
  WinningTeamWhereInput: ["AND", "OR", "NOT", "home", "draw", "away"],
  GoalsWhereInput: ["AND", "OR", "NOT", "winner", "fulltime", "halftime", "extratime"],
  H2HTeamDetailWhereInput: ["AND", "OR", "NOT", "teamId", "goals"],
  WinningTeamUpdateEnvelopeInput: ["set", "update"],
  GoalsUpdateEnvelopeInput: ["set", "update"],
  H2HTeamDetailUpdateEnvelopeInput: ["set", "update"],
  ExtratimeGoalsNullableCompositeFilter: ["equals", "is", "isNot", "isSet"],
  WinningTeamUpdateInput: ["home", "draw", "away"],
  GoalsUpdateInput: ["winner", "fulltime", "halftime", "extratime"],
  H2HTeamDetailUpdateInput: ["teamId", "goals"],
  ExtratimeGoalsWhereInput: ["AND", "OR", "NOT", "extratime", "penalty"],
  ExtratimeGoalsNullableUpdateEnvelopeInput: ["set", "upsert", "unset"],
  ExtratimeGoalsUpsertInput: ["set", "update"],
  ExtratimeGoalsUpdateInput: ["extratime", "penalty"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

