(function($){

	//define the new for the plugin ans how to call it
	$.fn.quicktip = function(options) {

		//set default options
		var conf = {
			tipClass	: 'arrow_box',
			hoverDelay	: 300,
			speed       : 'fast',
			distance	: 160,
			padLeft		: 20,
			layout   : '<div/>'
		};

		var options = $.extend(conf, options);

		return this.each(function(options){
			var getText = $(this).attr('title');
            
			var $wrapper = $(conf.layout).addClass(conf.tipClass);
			$wrapper.append('<div class="text">' + getText + '</div>');
			
			$(this).append($wrapper);

			var $tooltip = $('.'+conf.tipClass,this);
			var widthP = $tooltip.width();

			var widthT = $(this).width();
			var heightT = $(this).height();

			var marginTop = heightT - conf.distance;
			var marginLeft = (widthP - widthT)/2;
			marginLeft = -marginLeft + conf.padLeft;
			$tooltip.css({marginLeft: marginLeft+'px', bottom: marginTop+'px'});

			$(this).css('position','relative');
			$tooltip.css('opacity',0);

			$(this).removeAttr('title');
			

			var config = {
				sensitivity: 2, 
				interval: conf.hoverDelay,
				over: linkOver, 
				timeout: conf.hoverDelay, 
				out: linkOut
			};
			
			$(this).hoverIntent(config);
			
			function linkOver(){
				$tooltip.show().animate({
                    bottom: conf.distance,
                 opacity: 1
                }, conf.speed);
			}
			
			function linkOut(){
				
				$('.'+conf.tipClass,this).animate({
                    bottom: (conf.distance*1.5)+marginTop,
                    opacity: 0
			    }, conf.speed, function() {
					$(this).hide();
				});

			}
		});
	};
})(jQuery);