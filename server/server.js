// Define the requirements
const express = require('express');
const path = require('path');
const app = express();

// Define the port the web server will listen to
app.set('port', 8888);

app.get('/hello-world', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

// Start the server and report the port on which it is running
const server = app.listen(app.get('port'), function() {
    console.log('The server is running on: ' + app.get('port'));
})
