// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var express = require('express');
var path = require('path');

var app = express();
var friendsData	= require('../data/friends.js');

module.exports = function(app){

	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {
		var newFriend = req.body;
		friendsData.push(newFriend);
		res.json(friendsData);
	});

	app.post('/api/clear', function(req, res) {
		friendsData = [];
	})
}