jQuery.fn.slideFadeToggle = function(speed, easing, callback) {
  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);  
};

$(document).ready(function() {
  $("#sfbutton").on("click", function() {
    $(this).next().slideFadeToggle('slow', function() {
      var $this = $(this);
      if ($this.is(':visible')) {
        $this.text('Successfully opened.');
      } else {
        $this.text('Sucessfully closed.');
      }
    });
  });
});
