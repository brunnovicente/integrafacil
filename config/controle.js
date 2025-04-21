function islogado(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    req.flash('error_msg', 'Você precisa realizar o login!.')
    res.redirect('/usuario/login')
}

export default {islogado}