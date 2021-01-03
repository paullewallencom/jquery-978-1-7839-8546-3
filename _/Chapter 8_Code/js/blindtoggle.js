jQuery.fn.blindToggle = function(speed, easing, callback) {
  var h = this.height() + parseInt(this.css('paddingTop')) + parseInt(this.css('paddingBottom'));
  return this.animate({marginTop: parseInt(this.css('marginTop')) <0 ? 0 : -h}, speed, easing, callback);  
};

$(document).ready(function() {
  var $box = $('#box').wrap('<div id="box-outer"></div>');
  $('#blind').click(function() {
    $box.blindToggle('slow', $.bez([.25,.99,.73,.44]));  
  });    
});