const express = require ('express');
const router = express.Router();
const Cliente =  require ('../database/schemma/clientSchemma')

router.get('/', async (req, res, next)=>{
    try {
        const cliente = await Cliente.find();
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.post('/', async (req, res, next)=>{
    const cliente = new Cliente({
        nome: req.body.nome,
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