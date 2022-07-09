import Express from 'express'

export const create: Express.RequestHandler = async (req, res) => {
    const createdExample = await ExampleModel.createdExample(
    res.status(201).json(createdExample)
}
