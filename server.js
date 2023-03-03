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
mongoose.connect(uri,{ useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB database connection established successfully");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  const projectRouter = require('./routes/projects')
  const postRouter = require('./routes/posts')

  app.use('/projects', projectRouter);
  app.use('/posts', postRouter);

 app.listen(HTTP_PORT, ()=>{
       console.log(`server listening on: ${HTTP_PORT}`);
});
