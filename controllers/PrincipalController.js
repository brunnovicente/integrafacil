class PrincipalController {

    index = function (req, res){
        res.render('principal/index', {usuario: req.user});
    }

}

export default new PrincipalController();