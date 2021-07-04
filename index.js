require('dotenv').config()
const xlsx = require('node-xlsx');

const express = require('express')
const app = express()


var config = require('./db/db.js');
var con = config.con;



const port = process.env.PORT || 3000


const server = app.listen(port, () => {
	con.getConnection((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
  console.log(`Example app listening at http://localhost:${port}`)
})

/*
const io = require('socket.io')(server, {cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
*/

const io = require('./socket.js').init(server);


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



io.on('connection', socket => {
    console.log('Socket: client connected');
	
	socket.emit('connection', null);
	
	socket.on('join', data => {
        console.log(data); // data = { pincodes: [String, ...]}
		let bid = data.bid;
		let role = data.role;
		let pincodes = [];
		if(role=="BRANCH"){
			sql_query = `SELECT * FROM branches WHERE bid="${bid}";`;
			con.query(sql_query, (err,branchData) => {
			  if(err) {
				  return ;
			  } 
				
				if(branchData.length > 0){
					let pc = branchData[0].pincodes.split(",");
					pincodes = pc.slice(1, pc.length-1);
					pincodes.forEach( pincode => {
						socket.join(pincode);
					});
					
				}
			
			});
			
		}else if(role=="ADMIN"){
			socket.join("admin");
		}  
		  
		
		console.log(socket.adapter.rooms)
          
    });
	
	
	socket.on('notification_received', (data) => {
		console.log(data); //{ "bid": "1", "nid": notification_id }
		//mark notification_send table as viewed = 1 where bid = bid and nid = nid
		sql_query = `UPDATE notification_send set viewed = "1" WHERE bid = ${data.bid} AND nid = ${data.nid}`;
		console.log(sql_query);
			con.query(sql_query, (err,sqlData) => {
			  if(err) {
				  console.log(err);
				  return ;
			  } 
				console.log(sqlData);
			
			});
	});
	
	socket.on('disconnect', () => {
		console.log("disconnect");
	   socket.removeAllListeners();
	});
});


