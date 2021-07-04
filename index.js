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



//Basically two type of events we need in socket: 1. When post customerData comes, emit event to users, 2. When user saw notificatin then event emitted by frontend
//While on socket connection, we can store username or uid as id of connection


app.get('/', (req, res) => {
  res.json("Hello World")
})

const server = app.listen(port, () => {
	con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
  console.log(`Example app listening at http://localhost:${port}`)
})

const io = require('socket.io')(server, {cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
    console.log('Socket: client connected');
	
	socket.emit('connection', null);
	
	socket.on('join', data => {
        console.log(data); // data = { pincodes: [String, ...]}
		let pincodes = data.pincodes;
		
		pincodes.forEach( pincode => {
			socket.join(pincode);
		});
          
    });
	
	socket.on('disconnect', () => {
		console.log("disconnect");
	   socket.removeAllListeners();
	});
});


