const db = require ('../database/dbConfig');

const clientSchemma = new db.mongoose.Schema({


    Client:{
        type: String,
        required: true

    },

    cpf:{
        type:String,
        required: true

    },

    email:{
        type:String,
        required: true

    },

    trackingID:{
        type:String,
        required: true

    },

    clienteDate:{
        type:Date,
        required: true,
        default: Date.now
    },

    status:{
        type:String,
        default: true
    }

});

module.exports = db.mongoose.model('Cliente', clientSchemma)