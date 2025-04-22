import ProcedimentoController from '../controllers/ProcedimentoController.js'
import controle from '../config/controle.js'
import express from 'express'
const router  = express.Router()

router.get('/', controle.islogado, ProcedimentoController.index)

export default router