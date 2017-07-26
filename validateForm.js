var emailValid = false;
var pwdValid = false;

function validateEmail() {
	var inputEmail = document.getElementById("inputEmail").value;
	console.log(inputEmail);
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	if (re.test(inputEmail)) {
  		document.getElementById("emailHolder").className = "form-group has-success";
  		emailValid = true;
  		if (emailValid && pwdValid) button(true);
  	}
  	else {
  		document.getElementById("emailHolder").className = "form-group has-error";
  		emailValid = false;
  		button(false)
  	}
}

function validatePassword() {
	var inputPassword = document.getElementById("inputPassword").value;
	if (inputPassword.length >= 5) {
  		document.getElementById("pwdHolder").className = "form-group has-success";
  		pwdValid = true;
  		if (emailValid && pwdValid) button(true);
  		document.getElementById("pwdMsg").innerHTML = "";
  	}
  	else {
  		document.getElementById("pwdHolder").className = "form-group has-error";
  		pwdValid = false;
  		document.getElementById("pwdMsg").innerHTML = "Password length should me greter than 5 symbols";
  		button(false)
  	}
}

function button(value) {
	if (value) {
		document.getElementById("submitButton").disabled = false;
	}
	else {
		document.getElementById("submitButton").disabled = true;
	}

}