const express = require('express')
const app = express()
const path = require('path')


app.get('/', function(req, res) {
  // Query database
  // send the data to the client that requested it.
  res.sendFile(path.join(__dirname + "/public/index.html"))
})

// Handler for requests from client at nerdblog.io/posts
app.get('/posts', function(req, res) {
  res.send()
})

app.get('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/css/style.css'))
})

app.get('/app.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/js/app.js'))
})
app.get('/blog_post.js', function (req, res){
  res.sendFile(path.join(__dirname + '/public/js/blog_post'))
}) 


app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})

var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

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
	var collection = db.collection('authors');
	// Insert some documents
	collection.insertMany([
		{
			fname : 'john',
			uname : 'hraboskyjr',
			location : 'wisconsin',
			post_count : 0
		},{
			fname : 'alex',
			uname : 'claybeard',
			location : 'washington',
			post_count : 0
		}
	], function(err, result) {
	console.log("Inserted 2 documents into the document collection");
	callback(result);
	});
}
