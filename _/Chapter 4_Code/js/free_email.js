// Add validation
$.formUtils.addValidator({
  name : 'free_email',
  validatorFunction : function(value, $el, config, language, $form) {
  	var emailName = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
    return (emailName.test(value))
  },
  errorMessage : 'Sorry - we do not accept free email accounts such as Hotmail.com'
});