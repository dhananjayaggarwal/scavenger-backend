require('dotenv').config()
const xlsx = require('node-xlsx');

const express = require('express')
const app = express()


var config = require('./db/db.js');
var con = config.con;



const port = process.env.PORT || 3000



const mysql = require('mysql')

const header_middleware = require("./middlewares/header")

const detailsRouter = require("./Routes/details");
const userRoutes = require("./Routes/user");


//moved to header middleware
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
//app.use(cors());
app.use(header_middleware)

app.use("/api/details", detailsRouter)
app.use("/api/user", userRoutes);


app.get('/', (req, res) => {
  res.json("Hello World")
})

app.listen(port, () => {
	con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
  console.log(`Example app listening at http://localhost:${port}`)
})
