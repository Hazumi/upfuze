// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToMongo } from '../../database/connectToMongo'
import { Example } from '../../models/example'

type Response = {
  name: string
}

// Just some sample code for an example api endpoint handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  await connectToMongo()

  if (req.method === 'POST') {
      await Example.create({
          name: 'ayo bet'
      })
  }

  if (req.method === 'PUT') {
      await Example.updateMany({}, {
          $set: {
              name: 'yooooooooooooooooo'
          }
      })
  }

  if (req.method === 'DELETE') {
      await Example.deleteOne()
  }

  const example = await Example.findOne()

  res.status(200).json(example)
}
