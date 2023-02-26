import React, { useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import { RoleType, ProjectType } from 'upfuze'

type Props = {
  roles: RoleType[]
  project: ProjectType
}

export const ProjectRoles:React.FC<Props> = ({ roles: inRoles, project }) => {
  const [loading, setLoading] = useState(false)
  const [roles, setRoles] = useState(inRoles)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const session = useSession()

  const iAmTheOwnerOfThisProject = useMemo((): boolean => {
    if (!session.data?.user || !project) {
      return false
    }

    return session.data.user.id === project.owner
  }, [session, project])

  const maxDescriptionCharacterLength = 150

  const formatDescription = (role: RoleType): string => {
    return role.description.length < maxDescriptionCharacterLength
      ? role.description
      : role.description.substring(0, maxDescriptionCharacterLength) + '...'
  }

  const newRoleSubmitted = async (): Promise<void> => {
    if (loading) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        '/api/roles',
        {
          method: 'POST',
          body: JSON.stringify(({
            projectId: project._id,
            name,
            description
          })),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )

      const responseData = await response.json() as RoleType

      setRoles((prev) => [
        ...prev,
        responseData
      ])

      setName('')
      setDescription('')
    } catch (err) {
      alert('Ruh roh! Something went wrong. Please try again later.')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={newRoleSubmitted}>
      <h2>Roles 0/{roles.length}</h2>
      <table>
        <tbody>
          { roles.map((role) => (
            <tr key={role._id}>
              <td>
                { role.name } 
              </td>
              <td>
                { formatDescription(role) } 
              </td>
              <td>
                <button type="button">View Role</button>
              </td>
            </tr>
          ))} 
          { iAmTheOwnerOfThisProject && (
            <tr>
              <td>
                <label htmlFor="name">Role Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Project Manager"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <label htmlFor="description">Description</label>
                <textarea required rows={1} name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
              </td>
              <td>
                <button type="submit" disabled={loading}>Add Role</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </form>
  )
}

