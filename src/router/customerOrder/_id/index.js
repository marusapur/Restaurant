import { Router } from 'express'
import get from './get'
import post from './post'

const router = Router({ mergeParams: true })

router.get('/', get)

router.post('/', post)

export default router