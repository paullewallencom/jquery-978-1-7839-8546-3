// place this before all of your code, outside of document ready.
$.fn.clicktoggle = function(a, b) {
  return this.each(function() {
    var clicked = false;
    $(this).on("click", function() {
      if (clicked) {
        clicked = false;
        return b.apply(this, arguments);
      }
      clicked = true;
      return a.apply(this, arguments);
    });
  });
};

function odd() {
  $("#mydiv").append("Your last number was: odd<br>");
}

function even() {
  $("#mydiv").append("Your last number was: even<br>");
}

$(document).ready(function() {
  $("#mydiv").clicktoggle(even, odd);
});