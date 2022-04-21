import mongoose, { Mongoose } from 'mongoose'
import { config } from '../config'


declare global {
    var mongo: {
        connection: Mongoose | null
        promise: Promise<Mongoose> | null
    }
}

let cached = global.mongo

if (!cached) {
    global.mongo = {
        connection: null,
        promise: null
    }

    cached = global.mongo
}

export const connectToMongo = async (): Promise<Mongoose> => {
    if (cached.connection) {
        return cached.connection
    }

    if (!cached.promise) {
        const {
            DB_HOST,
            DB_PORT,
            DB_NAME,
            DB_USERNAME,
            DB_PASSWORD
        } = config()
        const fullMongoUri = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

        cached.promise = mongoose.connect(fullMongoUri)
    }

    cached.connection = await cached.promise

    return cached.connection
}
