import express from 'express'
import * as controller from '../controllers/exampleController'
import { validateBody } from '../validation/validateBodyMiddleware'
import {
    createExampleValidation,
    updateExampleValidation
} from '../validation/exampleValidation'

const router = express.Router()

// Create
router.route('/examples').post(
    validateBody(createExampleValidation),
    controller.create
)

// Get many
router.route('/examples').get(
    controller.getMany
)

// Get one
router.route('/examples/:exampleId').get(
    controller.getOne
)

// Update one
router.route('/examples/:exampleId').put(
    validateBody(updateExampleValidation),
    controller.update
)

// Delete one
router.route('/examples/:exampleId').delete(
    controller.delete
)

export default router
