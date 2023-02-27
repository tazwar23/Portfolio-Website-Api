const express = require("express");
const path = require("path");
const cors = require("cors");
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
var HTTP_PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_CONN_STRING;

console.log(uri);

mongoose.connect(uri,{ useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log("MongoDB database connection established successfully");
})

// const db = mongoose.connect(uri);
// db.once('open', ()=>{console.log("YAAAAAAAAAAAAAAAAAAAA")})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


// setup http server to listen on HTTP_PORT
//app.listen(HTTP_PORT, onHttpStart);
 app.listen(HTTP_PORT, ()=>{
       console.log(`server listening on: ${HTTP_PORT}`);
});
