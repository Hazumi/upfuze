import mongoose from 'mongoose'
import config from '../config'

export const connectToDatabase = async (): Promise<void> => {
    const {
        DB_HOST,
        DB_PORT,
        DB_NAME,
        DB_USERNAME,
        DB_PASSWORD,
    } = config()

    const fullMongoUri = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

    try {
        await mongoose.connect(fullMongoUri)
    } catch (err) {
        console.error('Failed to connect to MongoDB:', fullMongoUri)

        // pass error up
        throw err
    }
}
