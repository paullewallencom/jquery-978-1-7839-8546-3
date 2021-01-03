var thisBody = document.body || document.documentElement,
    thisStyle = thisBody.style,
    cssTransitionsSupported = thisStyle.transition !== undefined,
    has3D = ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix());
 
// Switch to CSS3 Transform 3D if supported & accordion element exist
if(cssTransitionsSupported && has3D ) {
  if($('.children').length > 0) { 
    $('.children').addClass("accordion_css3_support");
  }
}
 
$('.parent a').on('touchstart click', function(e) {
  e.preventDefault();
  // If transitions or 3D transforms are not supported
  if(!cssTransitionsSupported || !has3D ) {
    $(this).siblings('.children').slideToggle(500);
  } else {
    $(this).siblings('.children').toggleClass("animated");
  }
}); 