const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    ClientName:String,
    ClientNumber:Number,
    DOB:Date,
    Email:String
});

module.exports = mongoose.model('clientSchema',ClientSchema)