import dotenv from 'dotenv-safe'

export const config = () => {
    dotenv.config({
        example: './.env.example'
    })

    return {
        DB_NAME: process.env.DB_NAME,
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT || 27017,
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD,
    }
}
