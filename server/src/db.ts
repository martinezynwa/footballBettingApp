import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const mongoURI: string = process.env.MONGODB_URI ?? ''

export const client = new MongoClient(mongoURI)
export const db = client.db()
