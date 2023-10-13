const express = require('express');
const router = express.Router();
const details = require('../Models/Register');

//post
router.post('/',async(req,res)=>{
    try{
     const ds = new details(req.body);
     await ds.save();
     res.status(200).json(ds);   
c
    }catch(error){
        res.status(400).json({message:error.message})
    }
});

module.exports=router;