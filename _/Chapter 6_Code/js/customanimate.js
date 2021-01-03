$(document).ready(function() {
  $.extend(jQuery.easing, { 
    easeInBackCustom: function(x,t,b,c,d) { 
  	  var s;
      if (s == undefined) s = 2.70158;
      return c*(t/=d)*t*((s+1)*t - s) + b;
    }
  })

  $( "#go" ).click(function() {
    $( "#block" ).animate({
      width: "50%",
      opacity: 0.8,
      fontSize: "3rem",
      borderWidth: "0.5rem",
    }, 1500, $.bez([0.23, 1, 0.32, 1])); //'easeInBackCustom' );
  });
})