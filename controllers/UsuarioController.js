import Usuario from "../models/Usuario.js";
import bcrypt from 'bcrypt'
import passport from "passport";

class UsuarioController {

    salvar = async function(req, res) {

        var senha = await bcrypt.hash(req.body.password, 10);

        const usuario = {
            username: req.body.username,
            email: req.body.email,
            password: senha,
            status: 1,
            categoria: 1
        }

        Usuario.create(usuario).then(function(usuario) {
            req.flash('success_msg', 'Usuário cadastrado com sucesso!');
            res.redirect('/usuario/cadastrar');
        })

    }

    cadastrar = function(req, res){
        res.render('usuario/cadastrar', {layout:'externo'});
    }

    logar = function(req, res){
        res.render('usuario/login', {layout:'externo'});
    }

    login = function(req, res, next){
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/usuario/login',
            failureFlash: true
        })(req, res, next);
    }

    logout = function(req, res, next) {
        req.logout(function (erro){
            req.flash('success_msg', 'Usuário deslogado com sucesso.')
            res.redirect('/usuario/login')
        })
    }

}//Fim da Classe

export default new UsuarioController();