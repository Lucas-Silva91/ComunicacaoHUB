
const mongoose = require ('mongoose');

function connetionToDatabase(){
    mongoose.connect(process.env.DATABASE_STRING|| "mongodb://localhost/ecommerce", { 
        useNewUrlParser: true, 
        useFindAndModify: true, 
        useUnifiedTopology: true
    }
)};

function DBSetting(){
    const db = mongoose.connection
    db.on('error', (err)=> console.log(err));
    db.once('open', ()=>console.log('Banco de dados: OK'));
}

module.exports = {
    mongoose,
    connetionToDatabase,
    DBSetting
}

