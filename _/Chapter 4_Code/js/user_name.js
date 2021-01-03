// Add validation
$.formUtils.addValidator({
  name : 'user_name',
  validatorFunction : function(value, $el, config, language, $form) {
    return (value.indexOf(" ") !== -1)
  },
  errorMessage : 'Please enter your full name'
});