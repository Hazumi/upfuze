import * as yup from 'yup'

const exampleSchema = {
    firstName: yup.string().min(3, 'First name must be at least 3 characters!'),
    lastName: yup.string(),
    birthday: yup.date()
}

export const createExampleValidation = yup.object({
    firstName: exampleSchema.firstName.required('First name is required.'),
    lastName: exampleSchema.lastName.required('Last name is required.'),
    birthday: exampleSchema.birthday.required('Birthday is required.')
})

export const updateExampleValidation = yup.object({
    firstName: exampleSchema.firstName.notRequired(),
    lastName: exampleSchema.lastName.notRequired(),
    birthday: exampleSchema.birthday.notRequired()
})
