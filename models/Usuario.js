import banco from '../config/banco.js'

const Usuario = banco.sequelize.define('usuarios', {
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: banco.Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: banco.Sequelize.STRING(250),
        allowNull: false
    },
    email:{
        type: banco.Sequelize.STRING(255),
    },
    categoria:{
        type: banco.Sequelize.INTEGER,
        default: 0
    },
    status: {
        type: banco.Sequelize.INTEGER,
        default: 0
    },
    codigo: {
        type: banco.Sequelize.STRING(20),
        default: null
    }
})

export default Usuario