import { Router } from 'express'
import { getSkaters, getSkater, createSkater, updateSkater, deleteSkater } from '../controllers/skater.controllers'
const router = Router()


//api/skaters/
router.post('/', createSkater)

export default router