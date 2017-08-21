

const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.send('Hello World')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/nerdblog';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  db.close();
});

