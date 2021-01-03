(function($){
	var hasClass = $.fn.hasClass;
	$.fn.hasClass = function(value) {
	 	var orig = hasClass.apply(this, arguments);
		var supported, callback;

		function testWebP(callback) {
		    var webP = new Image();     
		    webP.src = "data:image/webp;base64,UklGRi4AAABX" 
		    		 + "RUJQVlA4TCEAAAAvAUAAEB8wAiMw"
		             + "AgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";
		    webP.onload = webP.onerror = function () {
		        callback(webP.height == 2);     
		    }; 
		};
	  
		window.onload = function() {
	    	testWebP(function(supported) {
	            console.log("WebP 0.2.0 " + (supported ? "supported!" : "not supported."));
				
				$('.webp').each(function() {
				  	if (supported) {
				  		src = $(this).attr('src');
			        	$(this).attr('src', src.substr(0, src.length-3) + 'webp');	 
						console.log("Image switched to WebP format");
				  	}
		    	})
	        });
  		}

    	return orig;
    };
})(jQuery);

$(document).ready(function(){
  if ($("img").hasClass("webp")) {
  	$("img").css("width", "80%");
  }
});