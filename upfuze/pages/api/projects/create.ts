import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import Project from '../../../models/project'
import Role from '../../../models/role'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return res.redirect(302, '/signup')
  }

  if (req.method === 'POST') {
    const createdProject = await Project.create({
      ...req.body,
      owner: session.user.id
    })

    await Role.create({
      projectId: createdProject._id,
      name: 'Project Owner',
      description: 'This is the owner of the project.',
      owner: session.user.id
    })

    return res.redirect(302, `/projects/${createdProject._id}`)
  }

  return res.redirect(302, '/projects/create')
}
