const express = require('express')

const jwt = require("jsonwebtoken");
const checkAuth = require("../middlewares/check-auth");

var config = require('../db/db.js');
var con = config.con;
const router = express.Router();

  router.get("/checkLogin", checkAuth, (req, res, next) => {
	  res.status(200).json(req.userData);
  });
  
  router.get("/pendingNotifications", checkAuth, (req, res, next) => {
	  let bid = req.userData.branchId;
	  con.query(`SELECT * FROM notification WHERE nid IN (SELECT nid from notification_send WHERE bid = "${bid}" AND viewed = '0');` ,(err,notificationList) =>{
					  if(err) return res.status(500).json({message: "SQl query failed", error: err});
					  
					 return res.status(200).json({
						success: "true",
						pendingNotifications: notificationList
						});
				  })
  });

  router.post("/login", (req, res, next) => {
	  let fetchedUser;
	  //call db to fetch user 
	  //let sql_query = 'SELECT * FROM users WHERE username = "'+req.body.username + '";';
	  console.log(req.body);
	  let sql_query = `SELECT * FROM users WHERE username = "${req.body.username}";`;
	  
	  con.query(sql_query, (err,user) => {
	  if(err) {
		  return res.status(500).json({message: "SQl query failed"});
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
				  
				  /*
				  let pincodes = [];
				  if(fetchedUser.role=="BRANCH"){
					let pc = fetchedUser.pincodes.split(",");
					pincodes = pc.slice(1, pc.length-1);
				  }
				  */
				  con.query(`SELECT * FROM notification WHERE nid IN (SELECT nid from notification_send WHERE bid = "${fetchedUser.bid}" AND viewed = '0');` ,(err,notificationList) =>{
					  if(err) return res.status(500).json({message: "SQl query failed"});
					  
					 return res.status(200).json({
						success: "true",
						token: token,
						expiresIn: process.env.ACCESS_TOKEN_LIFE_IN_SECONDS,
						userId: fetchedUser.uid,
						role: fetchedUser.role,
						pendingNotifications: notificationList
						});
				  })
				  
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