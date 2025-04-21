import banco from '../config/banco.js'

const Procedimento = banco.sequelize.define('procedimentos', {

    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    descricao:{
        type: banco.Sequelize.STRING(100),
    },

    valor:{
        type: banco.Sequelize.DECIMAL(10,2),
    },

    status:{
        type: banco.Sequelize.INTEGER,
    }

})

export default Procedimento;