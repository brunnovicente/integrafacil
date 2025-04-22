import Procedimento from '../models/Procedimento.js';

class ProcedimentoController {

    index = async function(req, res) {
        const procedimentos = await Procedimento.findAll()
        res.render('procedimento/index', {procedimentos: procedimentos})
    }

}

export default new ProcedimentoController()