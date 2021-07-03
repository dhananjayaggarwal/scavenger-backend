const xlsx = require('node-xlsx');

const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scavenger'
});


app.get('/readExcelAndInsertIntoDb', (req, res) => {
	const workSheetsFromFile = xlsx.parse(`${__dirname}/BeetleNut_Data.xlsx`);
	const data = workSheetsFromFile[0]["data"];
	
	for(let i=1; i<data.length; i++){
		if(data[i].length>0){
			let removeLines = ",";
			removeLines += data[i][6];
			removeLines += ",";
			data[i][6] = removeLines.replace(/(\r\n|\n|\r|\s)/gm,"");
			let branch = { insitution_name: data[i][0], branch_name: data[i][1] , address: data[i][2] , city: data[i][3],  contact_number: data[i][4], incharge: data[i][5], pincodes: data[i][6] };
			//console.log(branch);
			con.query('INSERT INTO branches SET ?', branch, (err, res) => {
			  if(err) throw err;

			  console.log('Last insert ID:', res.insertId);
			});
		}
	}
	


  res.json(data)
})

app.get('/insertNewUsersFromBranches', (req, res) => {
	let data;
	con.query('SELECT * FROM branches', (err,rows) => {
	  if(err) throw err;
		data = rows;
	  rows.forEach( (row) => {
		  let un = row.branch_name;
		  un = un.replace(/(\s|'|,|"|\/)/gm,"")
		  let user = {bid: row.bid, username: un, password: un, role: "BRANCH"};
		  con.query('INSERT INTO users SET ?', user, (err, res) => {
		  if(err) throw err;

		  console.log('Last insert ID:', res.insertId);
		});
		  
		});
	});
  res.json(data)
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
