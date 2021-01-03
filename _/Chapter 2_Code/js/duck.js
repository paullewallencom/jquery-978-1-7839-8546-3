$(document).ready(function() {
	jQuery.fn.toBark = function(){
        this.text("The dog says: Miaow!")
    };

	$('button').on('click', function() {
	    $('div').toBark();
	});

	(function($) {
	    var orig = $.fn.toBark;
	 
	    $.fn.toBark = function() {
	        orig.apply(this,arguments);
	             
	        if (this.text() === 'The dog says: Miaow!') {
	            this.append("  *Punch*  Meow!  *Punch* *Punch*  Woof?... *Gives Dog a chew*");
	        }
	    };
	}(jQuery));
})