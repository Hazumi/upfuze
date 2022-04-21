import mongoose from 'mongoose'
const { Schema } = mongoose

const exampleSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: (value: string) => value.length > 3,
        unique: true
    }
}, {
    timestamps: true
})

export const Example = mongoose.model('examples', exampleSchema)
