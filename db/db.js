var mysql = require('mysql');

config = {
  host: 'remotemysql.com',
  user: 'MpM3eL80L3',
  password: 'T2K3NoRvu0',
  database: 'MpM3eL80L3'
}

var con = mysql.createConnection(config);

con.connect(function(err) {
    if (err) throw err;
	
	console.log('connected successfully to DB.');
});

module.exports = {
     con : mysql.createConnection(config) 
};
