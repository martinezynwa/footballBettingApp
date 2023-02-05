import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import http from 'http'
import express from 'express'
import dotenv from 'dotenv'
import { getSession } from 'next-auth/react'
import matchService from './services/matchService'
import prepService from './services/prepService'
import h2hService from './services/h2hService'
import { GraphQLContext } from './types/GraphQL'
import { PrismaClient } from '@prisma/client'
import UserResolver from './graphql/resolvers/user'
import MatchResolver from './graphql/resolvers/match'
import H2HResolver from './graphql/resolvers/h2h'
import LeagueResolver from './graphql/resolvers/league'
import AdminResolver from './graphql/resolvers/admin'
import { buildSchema } from 'type-graphql'
import { Session } from './types/GraphQL'
//import { Session } from './prisma/generated/type-graphql'

const startServer = async () => {
  dotenv.config()
  const app = express()
  const httpServer = http.createServer(app)

  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      MatchResolver,
      H2HResolver,
      LeagueResolver,
      AdminResolver,
    ],
  })

  const corsOptions = { 
    origin: process.env.CLIENT_URI,
    credentials: true,
  }

  const prisma = new PrismaClient()

  const server = new ApolloServer({
    schema: schema,
    csrfPrevention: true,
    cache: 'bounded',
    context: async ({ req, res }): Promise<GraphQLContext> => {
      const session = (await getSession({ req })) as Session
      return { session, prisma }
    },
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  })
  await server.start()
  server.applyMiddleware({ app, cors: corsOptions })
  await new Promise<void>(resolve =>
    httpServer.listen({ port: process.env.PORT }, resolve),
  )
  console.log(
    `Server ready at ${process.env.BACKEND_URI}${server.graphqlPath} `,
  )
}

startServer().catch(err => console.log(err))