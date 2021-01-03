$(document).ready(function () {

  	var emailField = $("#email");
  	var pattern = new RegExp(pattern);

  	if (emailField.is("input") && emailField.prop("type") === "email") {

		emailField.on("change", function(e) {
			emailField[0].checkValidity();
			if (!e.target.validity.valid) {
				$(this).removeClass("success").addClass("error")
			} else {
				$(this).removeClass("error").addClass("success")
			}
		});

		function checkEmail(email) {
			pattern = new RegExp("[^ @]*@[^ @]*\.[a-zA-Z]{2,}");
			pattern.test(email);
		}

		emailField.on("invalid", function(e) {
		    e.target.setCustomValidity("");
		    email = emailField.val();
		    checkEmail(email);
		    if (!e.target.validity.patternMismatch) {
		        e.target.setCustomValidity("I need to see an email address here, not what you’ve typed!");
		    }
		});	
	}

  	var urlField = $("#website");
  	var pattern = new RegExp(pattern);

  	if (urlField.is("input") && urlField.prop("type") === "url") {

		urlField.on("change", function(e) {
			urlField[0].checkValidity();
			if (!e.target.validity.valid) {
				$(this).removeClass("success").addClass("error")
			} else {
				$(this).removeClass("error").addClass("success")
			}
		});

		function checkURL(url) {
			pattern = new RegExp("/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/");
			pattern.test(url);
		}

		urlField.on("invalid", function(e) {
		    e.target.setCustomValidity("");
		    url = urlField.val();
		    checkURL(url);
		    if (!e.target.validity.patternMismatch) {
		        e.target.setCustomValidity("I need to see a valid website URL here, not what you’ve typed!");
		    }
		});	
	}
});