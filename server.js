const express = require('express')
const app = express()
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobs');
var password = require('password-hash-and-salt');


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

var User = mongoose.model('User', { email: String, password: String });




app.post('/register', function (req, res) {

	console.log('Registering new user');
	console.log(req.body.email)
	console.log(req.body.password)
	var email = req.body.email;
	var inputPassword = req.body.password;
	var hashed;
	password(inputPassword).hash(function(error, hash) {
    if(error)
        throw new Error('Something went wrong!');
    	hashed = hash;
    	var user = new User({ email:email, password:hashed });
		user.save(function (err) {
		  if (err) {
		    console.log(err);
		  } else {
		    console.log('user saved');
		  }
		});

    })
  res.send('Hello World!')
})


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})