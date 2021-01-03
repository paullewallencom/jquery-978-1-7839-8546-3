// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 
// MIT license
// [Original plugin] Copyright (c) 2012 Corey Frang

(function(jQuery) {

  var animating,
	requestAnimationFrame = window.requestAnimationFrame,
	cancelAnimationFrame = window.cancelAnimationFrame;

  requestAnimationFrame = window["RequestAnimationFrame"];
  cancelAnimationFrame = window["CancelAnimationFrame"];


  function raf() {
	if (animating) {
		requestAnimationFrame(raf);
		jQuery.fx.tick();
	}
  }

  if ( requestAnimationFrame ) {
	// use rAF
	jQuery.fx.timer = function(timer) {
	  if (timer() && jQuery.timers.push(timer) && !animating) {
  	    animating = true;
	    raf();
	  }
	};

	jQuery.fx.stop = function() {
		animating = false;
	};
  } 
}(jQuery));
