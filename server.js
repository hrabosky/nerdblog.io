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
	insertDocuments(db, function(){
	console.log('Finished inserting documents');
}) 
  db.close();
});



//Inserting a Document

var insertDocuments = function(db, callback)  {
	// Get the documents collection
	var collection = db.collection('documents');
	// Insert some documents
	collection.insertMany([
		{a : 1}, {a : 2}, {a : 3}
	], function(err, result) {
	assert.equal(err, null);
	assert.equal(3, result.result.n);
	assert.equal(3, result.ops.length);
	console.log("Inserted 3 documents into the document collection");
	callback(result);
	});
}

