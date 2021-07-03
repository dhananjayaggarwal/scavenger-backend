var mysql = require('mysql');

config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scavenger'
}

var con = mysql.createConnection(config);

con.connect(function(err) {
    if (err) throw err;
	
	console.log('connected successfully to DB.');
});

module.exports = {
     con : mysql.createConnection(config) 
};
