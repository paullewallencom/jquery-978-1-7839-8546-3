$(document).ready(function() {
	var myLanguage = {
		badUrl: "De ingangswaarde is geen correcte URL"
	};

	$.formUtils.loadModules('user_name, free_email');

	$.validate({
		modules: 'user_name, free_email',
		validateOnBlur : false, 
    	errorMessagePosition : 'top', 
		language: myLanguage
	});
});