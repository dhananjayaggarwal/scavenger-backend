var mysql = require('mysql');

config = {
  host: 'remotemysql.com',
  user: 'MpM3eL80L3',
  password: 'WaLhTDchVW',
  database: 'MpM3eL80L3'
}

var con = mysql.createPool(config);

/*
con.connect(function(err) {
    if (err) throw err;
	
	console.log('connected successfully to DB.');
});
*/

module.exports = {
     con : mysql.createPool(config) 
};
