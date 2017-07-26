const express = require('express')
const app = express()
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobs');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());


app.post('/register', function (req, res) {
	console.log('Registering new user');
	console.log(req.body.email)
  res.send('Hello World!')
})


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})