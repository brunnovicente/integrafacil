import express from "express"
import UsuarioController from "../controllers/UsuarioController.js"
const router = express.Router()

router.get('/cadastrar', UsuarioController.cadastrar)
router.post('/cadastrar', UsuarioController.salvar)
router.post('/login', UsuarioController.login)
router.get('/login', UsuarioController.logar)
router.get('/logout', UsuarioController.logout)

export default router