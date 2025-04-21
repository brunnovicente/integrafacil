import express from "express"
import PrincipalController from "../controllers/PrincipalController.js"
import controle from '../config/controle.js'
const router = express.Router()


router.get("/", controle.islogado, PrincipalController.index)

export default router;