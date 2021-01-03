$(document).ready(function(){
	var clickCallbacks = $.Callbacks();

	clickCallbacks.add(function() {
	    var count = parseInt(this.text(), 10);
	    this.text(count + 1);
	});

	clickCallbacks.add(function(id) {
	    $('span', '#last').text(id);
	});

	$('.click').click(function() {
	    var $element = $(this).next('div').find('[id^="clickCount"]');
	    clickCallbacks.fireWith($element, [this.id]);
	});
});
