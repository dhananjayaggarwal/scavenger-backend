const express = require('express')

const jwt = require("jsonwebtoken");

var config = require('../db/db.js');
var con = config.con;
const router = express.Router();


  router.post("/login", (req, res, next) => {
	  let fetchedUser;
	  //call db to fetch user 
	  //let sql_query = 'SELECT * FROM users WHERE username = "'+req.body.username + '";';
	  
	  let sql_query = `SELECT * FROM users WHERE username = "${req.body.username}";`;
	  
	  con.query(sql_query, (err,user) => {
	  if(err) {
		  res.status(500).json({message: "SQl query failed"});
	  } 
		
		if(user.length > 0){
			//check password
			fetchedUser = user[0];
			if(req.body.password === fetchedUser.password){
				const token = jwt.sign(
					{ username: fetchedUser.username, userId: fetchedUser.uid , role: fetchedUser.role, branchId: fetchedUser.bid,},
					process.env.ACCESS_TOKEN_SECRET,
					{ expiresIn: process.env.ACCESS_TOKEN_LIFE_IN_HOURS }
				  );
				  res.status(200).json({
					token: token,
					expiresIn: process.env.ACCESS_TOKEN_LIFE_IN_SECONDS,
					userId: fetchedUser.uid,
					role: fetchedUser.role
				  });
			}
			else{
				res.status(401).json({
				  message: "Auth failed inccorect password"
				})
			}
		}else{
		res.status(401).json({ message: "Auth failed, no user found"});
		}
	
	});
	
      
  })

module.exports = router