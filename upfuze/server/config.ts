import { config } from 'dotenv-safe'

type ServerEnvironment = {
    PORT: number
    DB_NAME: string
    DB_HOST: string
    DB_PORT: number
    DB_USERNAME: string
    DB_PASSWORD: string
}

export default (): ServerEnvironment => {
  config({
    example: './.env.example'
  })

  return {
      PORT: Number(process.env.PORT),
      DB_NAME: process.env.DB_NAME,
      DB_HOST: process.env.DB_HOST,
      DB_PORT: Number(process.env.DB_PORT) || 27017,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD
  }
}
