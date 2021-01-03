$.easing.easeOutCirc= function (x, t, b, c, d) {
  return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
}

jQuery.fn.slideFadeToggle = function(speed, easing, callback) {
  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);  
};

$(document).ready(function() {
  $("#sfbutton").on("click", function() {
    $(this).next().slideFadeToggle(1000, 'easeOutCirc');
  });
});