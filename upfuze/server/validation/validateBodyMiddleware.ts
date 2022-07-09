import Express from 'express'
import Yup from 'yup'

export const validateBody = (
    validationSchema: Yup.AnyObjectSchema
):Express.Handler => async (
    req: Express.Request,
    _: Express.Response,
    next: Express.NextFunction
):Promise<void> => {
    await validationSchema.isValid(req.body)
    req.body = validationSchema.cast(req.body, { stripUnknown: true })
    next()
}
