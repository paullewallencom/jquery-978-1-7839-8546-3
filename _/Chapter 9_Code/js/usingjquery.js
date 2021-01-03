$(document).ready(function() {
  var $pre = $('pre');
  var $p = $('p')
  var supported = 'The Page Visibility API is natively supported in this browser.'
  var notsupported = 'The Page Visibility API is not natively supported in this browser.'

  $('p').first().html(
	$.support.pageVisibility ? log($p, supported) : log($p, notsupported)
  );

  function log(obj, text) {
	obj.append(text + '<br>');
  }

  $(document).on({
	'show.visibility': function() {
	  log($pre, 'The page gained visibility; the <code>show</code> event was triggered.');
	},
	'hide.visibility': function() {
	  log($pre, 'The page lost visibility; the <code>hide</code> event was triggered.');
	}
  });
});
