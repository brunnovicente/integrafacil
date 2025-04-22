import express from "express";
const app = express();

import handlebars from "express-handlebars";
import Handlebars from "handlebars";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import { allowInsecurePrototypeAccess} from "@handlebars/allow-prototype-access";
import session from "express-session";
import flash from "connect-flash"
import passport from "passport"
import auth from "./config/auth.js";
auth(passport)

///////////////////////////////
//CONFIGURAÇÕES
///////////////////////////////
const PORTA = 3000
app.use(session({
    secret: "iambatman",
    resave: true,
    saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());

app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    res.locals.usuario = req.user || null
    next()
});

//Template Engine
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'principal',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    'helpers':{
        json: function(context) {
            return JSON.stringify(context, null, 2);
        },
        eq: (a, b) => a === b, // Compara dois valores
        or: (a, b) => a || b,
        len: function (lista){
            return lista.length
        } ,
    }
}));
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Pasta de Arquivos Estásticos
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect('/principal');
})

import usuario from './routes/usuario.js'
app.use('/usuario', usuario)

import principal from './routes/principal.js'
app.use('/principal', principal)

import procedimento from './routes/procedimento.js'
app.use('/procedimento', procedimento)

app.listen(PORTA, () => console.log("Servidor iniciado em http://localhost:"+PORTA))