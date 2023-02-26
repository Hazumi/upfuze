import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import Role from '../../../models/role'
import Project from '../../../models/project'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (req.method === 'POST') {
    if (!session) {
      return res.status(403).json({
        message: 'Unauthorized'
      })
    }

    const body = {
      projectId: req.body.projectId,
      name: req.body.name,
      description: req.body.description
    }

    const project = await Project.findOne({
      _id: body.projectId
    }).lean()

    if (!project) {
      return res.status(404).json({
        message: 'Project not found'
      })
    }

    if (session.user?.id.toString() !== project.owner.toString()) {
      return res.status(403).json({
        message: 'Unauthorized'
      })
    }

    const createdRole = await Role.create(body)

    return res.status(201).json(createdRole)
  }

  return res.status(403).json({
    message: 'Unauthorized'
  })
}
