var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res) {
	res.send('\
		<!DOCTYPE html>\
		<html lang="en">\
			<head>\
				<meta charset="UTF-8">\
				<title>Mean Todo App</title>\
				<base href="/">\
			</head>\
			<body>\
				<div ui-view></div>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
	');
});

app.listen(PORT, function() {
	console.log('Server running on port'+PORT);
})