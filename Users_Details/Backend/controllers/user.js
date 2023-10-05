const express = require('express');
const router = express.Router();
const model = require('../models');

const errResBody ={
    status: 400,
    Response: 'error',
    msg: 'Some Thing Went Wrong...',
};

//login api..........
router.post('/login', async(req,res)=>{
    try{
        // console.log(req.body);
        const Data = await model.users.findOne({
            where: {
                email: req.body.email
            }
            
        });
        if(Data){
            if(req.body.password===Data.password){
                res.json({status:200, response: 'Sucess', mgs: "Login Sucessfull....",userData: Data});
            }else{
                res.json({status:404, response: 'Sucess', mgs: 'Incorrect Password...'});
            }
        }else{
            res.json({status:404, response: 'Sucess', mgs: 'Incorrect Email Id Please Registration....'})
        }
    }catch(error){
        res.json(errResBody);
    }
});
//registation api............
router.post('/reg', async(req,res)=>{
    try{
        if(typeof req.body.name=='' || req.body.name==null || req.body.name=="undefined"){
            res.json({status:401, res:'validation err', msg:"Plase enter your name.."});
            return false;
        }
        const inData =await model.users.create(req.body);
        res.json({status:200, response: 'Sucess', msg:'User Data Insert Sucessfull....'});
    } catch (error){
        //res.json({status:400, response: 'Fail', msg:'Email id Already Exixts..'});
        res.json(errResBody);
    }
});
//userlist api................
router.get('/list', async(req,res)=>{
    try{
        const Data = await model.users.findAll({});
        res.json({status:200, response: 'Sucess', UserData:Data});
    } catch(error){
        console.log(error);
        res.json(errResBody);
    }
});
router.post('/update/:id', async(req,res)=>{
    try{
        const Data = await model.users.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.json({status:200, response:'Sucess', msg: 'User Data Update Sucessfull'});
    }catch(error){
        res.json(errResBody);
    }
});

router.post('/delet/:id', async(req,res)=>{
    try{
        const data= await model.users.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({status:200, response: 'Sucess', mgs: 'User Data Delete Sucessfull.....'});
    }catch(error){
        res.json(errResBody);
    }
})

module.exports = router;
