const express = require('express');
const router = express.Router();
const model = require('../models');

const errBody = {
    status: 400,
    Response: 'error',
    msg: 'Some Thing Went Wrong..',
};
// User Registation api...
router.post('/reg', async(req,res)=>{
    try{
        if(typeof req.body.name=='' || req.body.name==null || req.body.name=="undefined"){
            return false;
        }else if(typeof req.body.email=='' || req.body.email==null || req.body.email=="undefined"){
            return false;
        }else if(typeof req.body.password=='' || req.body.password==null || req.body.password=="undefined"){
            return false;
        }else if(typeof req.body.phone=='' || req.body.phone==null || req.body.phone=="undefined"){
            return false;
        }
        const inData = await model.users.create(req.body);
        res.json({status:200, Response: 'Sucess', msg:'User Data Insert Sucessfull..'});
    } catch (error){
        res.json(errBody);
    }
});

// Login Api...
router.post('/login', async(req,res)=>{
    try{
        if(typeof req.body.email=='' || req.body.email==null || req.body.email=="undefined"){
            return false;
        }else if(typeof req.body.password=='' || req.body.password==null || req.body.password=="undefined"){
            return false;
        }
        const Data = await model.users.findOne({
            where:{
                email: req.body.email
            }
        });
        if(Data){
            if(req.body.password === Data.password){
                res.json({status:200, response: 'Sucess', msg: "Login Sucessfull....",userData: Data});
            }else{
                res.json({status:404, response: 'Sucess', msg: 'Incorrect Password...'});
            }
        }else{
            res.json({status:401, Response:'Sucess', msg:'Incorrect Email Id Please Registration....'})
        }
    } catch(error){
        res.json(errBody);
    }
})

// All User List api...
router.get('/list', async(req,res)=>{
    try{
        const data = await model.users.findAll({});
        res.json({status:200, Response:'Sucess', userData:data});
    } catch(error){
        res.json(errBody);
    }
});

// User Data Update Api...
router.post('/update/:id', async(req,res)=>{
    try{
        const data = await model.users.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.json({status:200, Response:'sucess', msg:'User Data Update Sucessfull...'});
    }catch(error){
        res.json(errBody);
    }
});

// User Data Delete Api...
router.post('/delete/:id', async(req,res)=>{
    try{
        const data = await model.users.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json({status:200, Response:'Sucess', msg:'User Data Delete Sucessfull'});
    } catch(error){
        res.json(errBody);
    }
});

module.exports = router;