import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)
