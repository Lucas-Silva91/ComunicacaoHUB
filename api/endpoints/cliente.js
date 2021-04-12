const express = require ('express');
const router = express.Router();
const Cliente =  require ('../database/clientSchemma')

router.get('/', async (req, res, next)=>{
    try {
        const client = await Client.find();
        res.status(200).json(client)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.post('/', async (req, res, next)=>{
    const cliente = new Cliente({
        cliente: req.body.cliente,
        cpf: req.body.cpf,
        email: req.body.email,
        trackingID: req.body.trackingID
    });

    try {
        const newCliente = await cliente.save();
        res.status(201).json(newCliente);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});


router.patch('/', (req, res, next)=>{

});

router.delete('/', (req, res, next)=>{

});

module.exports = router