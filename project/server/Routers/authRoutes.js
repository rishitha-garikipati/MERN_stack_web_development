const express = require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'pleasedontdo';

router.post('/token',async(req, res)=>{
    const {username,password}=req.body;
    const token=await jwt.sign({username},SECRET_KEY,{expiresIn:'1h'});
    res.json({token});
})

verifytoken= async(req, res,next)=>{
    const token=req.headers['authorization'];
    if (!token) return res.status(401).send({ message: 'No token provided' });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return res.status(500).send({ message: 'Failed to authenticate token' });
  
      req.userId = decoded.id;
      next();
    });
}

router.get('/verify',verifytoken,(req, res)=>{
    res.status(200).json({status:200,message:"VerifyToken"});
});
module.exports=router;