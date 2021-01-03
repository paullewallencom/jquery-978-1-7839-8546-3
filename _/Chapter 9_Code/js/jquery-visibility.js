;(function(window, document, $, undefined) {

  var prefix;
  var property;
  var eventName = '';
  var prefixes = [''];
  var $support = $.support;
  var $event = $.event;

  while ((prefix = prefixes.pop()) != undefined) {
	property = 'hidden';
	if ($support.pageVisibility = typeof document[property] == 'boolean') {
  	  eventName = 'visibilitychange';
	  break;
	}
  }

  $(document).on(eventName, function(event) {
	var type = event.type;
	var originalEvent = event.originalEvent;
	if (!originalEvent) {
return;
	}

	var toElement = originalEvent.toElement;
	if ( toElement == undefined && originalEvent.fromElement == undefined && originalEvent.relatedTarget == undefined ) {
	  $event.trigger(
		( property && document[property] ? 'hide' : 'show' ) + '.visibility'
	  );
	}
  });
}(this, document, jQuery));
