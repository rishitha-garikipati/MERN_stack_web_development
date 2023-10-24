const mongoose = require('mongoose');

const ClientSchemas = new mongoose.Schema({
    ClientName:String,
    ClientNumber:Number,
    DOB:Date,
    Email:String
});

module.exports = mongoose.model('clientSchema',ClientSchemas)