const express = require('express');
const router = express.Router();
const model = require('../models');

const errBody = {
    status: 400,
    Response: 'error',
    msg: 'Some Thing Went Wrong..',
};
// Insert Product api...
router.post('/p_reg', async(req,res)=>{
    try{
        const inData = await model.products.create(req.body);
        res.json({status:200, Response: 'Sucess', msg:'Product add Sucessfull...'});
    } catch (error){
        console.log(error);
        res.json(errBody);
    }
});

// All Product List...
router.get('/p_list', async(req,res)=>{
    try{
        const data= await model.products.findAll({});
        res.json({status:200, Response:'Sucess', productData:data});
    } catch(error){
        res.json(errBody);
    }
});

// Product Update api...
router.post('/p_update/:id', async(req,res)=>{
    try{
        const data = await model.products.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.json({status:200, Response:'Sucess', msg:'Product Update Sucessfull....'});
    }catch(error){
        res.json(errBody);
    }
});

// Product Delete Api....
router.post('/p_delete/:id', async(req,res)=>{
    try{
        const data = await model.products.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json({status:200, Response:'Sucess', msg:'Product Delete Sucessfull..'});
    }catch(error){
        res.json(errBody);
    }
});

module.exports = router;