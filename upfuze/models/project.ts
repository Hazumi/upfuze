import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this project.'],
    maxlength: [64, 'Name cannot be more than 60 characters'],
  },
  details: {
    type: String,
    required: [true, "Please provide details about this project."]
  },
  repository: {
    type: String,
    required: false
  },
  timeframe: {
    type: Number,
    required: false,
    default: 0
  },
  type: {
    type: String,
    required: true,
    allowedValues: ['open-source', 'commercial']
  },
  coverImage: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
    required: true
  }
}, {
  timestamps: true
})

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema)
