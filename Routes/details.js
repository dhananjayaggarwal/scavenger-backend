const express = require('express')
const router = new express.Router()
const checkAuth = require("../middlewares/check-auth");
var config = require('../db/db.js');
var con = config.con;
const io = require('../socket.js').get();

router.get("", checkAuth, (req, res, next) => {
    return res.status(200).json({ message: "Get Success", userDetails: req.userData });
});

router.get("/getBranchDetails", checkAuth, (req, res, next) => {
	let role = req.userData.role;
	let branchId = req.userData.branchId;
	let sql_query;
	if(role === "ADMIN"){
		sql_query = "SELECT * FROM branches";
	}else if(role==="BRANCH"){
		sql_query = `SELECT * FROM branches WHERE bid="${branchId}";`;
	}
	//console.log(req.userData, sql_query)
	con.query(sql_query, (err,branchData) => {
	  if(err) {
		  return res.status(500).json({message: "SQl query failed"});
	  } 
		
		if(branchData.length > 0){
			
				  return res.status(200).json({
					branchData
				  });
			
		}else{
		return res.status(404).json({ message: "No record found", userDetails: req.userData});
		}
	
	});
});


router.post("/customerForm", (req, res, next) => {
	
	  try{
		  
	  
	  const reqBody = req.body;
	  
	  let name = reqBody.name ? reqBody.name : "";
	  let email = reqBody.email ? reqBody.email : "";
	  let phone = reqBody.phone ? reqBody.phone : "";
	  let pincode = reqBody.pincode ? reqBody.pincode : "";
	  
	  
	  
	  if(email=="" || pincode=="") {
		 return res.status(500).json({message: "Invalid request data"});
	  }
	  
	  let notif = {name,phone,email,pincode};
	  console.log(notif);
	  con.query('INSERT INTO notification SET ?', notif, (err, data) => {
			  if(err) {
				 return res.status(500).json({message: "Error while inserting data"});
			  } else{
				   console.log('Last insert ID:', data);
			  
			  let nid = data.insertId;
			  let viewed = '0';
			  let sql_query = `INSERT INTO notification_send (nid, bid, viewed) SELECT '${nid}', bid, '${viewed}' FROM branches where pincodes LIKE "%,${pincode},%"`;
			  console.log(sql_query);
				con.query(sql_query, (err2, data2) => {
					
					if(err2) return res.status(500).json({message: "Error while inserting data in send table"});
					
					
					//TODO send socket notif (nid will be sent along with data) to all users in the room of pincode
					io.to(pincode).to("admin").emit('notification', notif, nid);

					return res.status(200).json({
						message: "success",
						data: data2
				  });
				});
				  
			  }

			 
	   });
	   
	   }catch(e){
		  
		  console.log("/customerForm exception", e);
	  }
});


module.exports = router