import mongoose from 'mongoose'

const { Schema } = mongoose

const exampleSchema: mongoose.Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthday: { type: Date, required: true }
}, {
    timestamps: true,
    versionKey: false
})

export const ExampleModel = mongoose.model<Upfuze.ExampleModelType>('ExampleTableName', exampleSchema)
