import * as TypeGraphQL from 'type-graphql'

@TypeGraphQL.ObjectType('ActivityResponseTGQL', {
  isAbstract: true,
})
export class ActivityResponseTGQL {
  @TypeGraphQL.Field(_type => String, {})
  message: string | null
}
