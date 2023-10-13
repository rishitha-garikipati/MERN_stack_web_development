const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Mobileno:Number,
    Age:Number
   
});

module.exports = mongoose.model('registerSchema',RegisterSchema)