import express from 'express'
import config from './config'
import routes from './routes'
import { connectToDatabase } from './utils/connectToDatabase'

const startUpfuze = (): void => {
    const app = express()

    app.use(express.json())

    app.use(express.urlencoded({ extended: true }))

    app.use('/api', routes)

    app.use('/api', routes)

    const { PORT } = config()

    app.listen(PORT, async () => {
      await connectToDatabase()
      console.log(`Server started on port ${PORT}`)
    })
}

startUpfuze()
