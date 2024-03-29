const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const clientroute = require('./Routers/Clientroute');
const mailrouter = require('./Routers/mailrouter');
const RegisterRoute = require('./Routers/RegisterRoute');
const HrRouter = require('./Routers/HrRouter');

//express , body parser & cors
const app = express();
app.use(bodyParser.json());
app.use(cors());

//connection establish between node.js to mongodb
const MONOGO_URI = 'mongodb+srv://rishitha:Mongodb7723$*@cluster0.wcwvalk.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONOGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB conection error:'));

//controllers ->path of your routers
app.use('/api/client',clientroute)
app.use('/api/emailotp',mailrouter)
app.use('/api/register',RegisterRoute)
app.use('/api/hr',HrRouter)

//start the server
app.listen(7000,()=>{
    console.log("server is running at port 7000");
})