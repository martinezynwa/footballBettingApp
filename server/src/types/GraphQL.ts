import { PrismaClient } from '@prisma/client'
import { ISODateString } from 'next-auth'
import { User } from '../prisma/generated/type-graphql'

export type GraphQLContext = {
  session: Session
  prisma: PrismaClient
}

export type Session = {
  user?: User
  expires: ISODateString
}
