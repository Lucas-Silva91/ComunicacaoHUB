const db = require ('../database/dbConfig');

const ecommerceSchemma = new db.mongoose.Schema({


    ecommerce:{
        type: String,
        required: true

    },

    cnpj:{
        type:String,
        required: true

    },

    email:{
        type:String,
        required: true

    },

    accountDate:{
        type:Date,
        required: true,
        default: Date.now
    },

    status:{
        type:String,
        default: true
    }

});

module.exports = db.mongoose.model('Ecommerce', ecommerceSchemma)