const express = require('express')
const router = new express.Router()
const checkAuth = require("../middlewares/check-auth");
var config = require('../db/db.js');
var con = config.con;

router.get("", checkAuth, (req, res, next) => {
    res.status(200).json({ message: "Get Success", userDetails: req.userData });
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
		  res.status(500).json({message: "SQl query failed"});
	  } 
		
		if(branchData.length > 0){
			
				  res.status(200).json({
					branchData
				  });
			
		}else{
		res.status(404).json({ message: "No record found", userDetails: req.userData});
		}
	
	});
});


module.exports = router