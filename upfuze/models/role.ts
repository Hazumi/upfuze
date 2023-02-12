import mongoose from 'mongoose'

const RoleSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  description: {
    type: String,
    required: [true, "Please provide details about this project."]
  },
  name: {
    type: String,
    required: [true, "Please provide details about this project."]
  },
  filledUserRole: {
    type: mongoose.Types.ObjectId,
    ref: 'Profile',
    required: false
  }
}, {
  timestamps: true
})

export default mongoose.models.Role || mongoose.model('Role', RoleSchema)
