// Import Needed Modules
const express = require('express');
const router = require('./src/routes/api');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');

// Object Create of Express
const app = express();

// Security Middleware Implement
app.use(cors(
    {
        origin:["https:crud-food-api.vercel.app"],
        methods:['POST','GET'],
        credentials:true
    }
));
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser.json());

// Request Rate Limiting
const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000
});
app.use(rateLimiter);

// Mongo DB Database Connection
const URI = "mongodb+srv://apurbo:zF34XPmA60cWbhx6@cluster0.1qn7zhf.mongodb.net/foodapp";
const OPTION = { user: '', pass: '', autoIndex: true };

mongoose.connect(URI, OPTION).then((res) => {
    console.log('Connection successful');
}).catch((err) => {
    console.log(err);
});

// Routing Implement
app.use('/api/v1', router);

//  Undefined Route

app.use('/' , (req,res)=>{

    res.json("Hello Node is Running")

})


app.use('*', (req, res) => {
    res.status(404).json({
        status: '404',
        data: "No Api Found"
    });
});

module.exports = app;
