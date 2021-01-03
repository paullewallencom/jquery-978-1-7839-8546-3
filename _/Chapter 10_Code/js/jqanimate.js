$(document).ready(function(){
  $("input[name='css']").on("click", function(){
    $("img").toggleClass("change-filter");
  })	

  $("input[name='jquery']").on("click", function(){
  	$("img").hue(50);
  });

  $("input[name='pure']").on("click", function() {
    //$("img").css({
    //  'filter'         : 'blur(4px)',
    //  '-webkit-filter' : 'blur(4px)'
    //});

  	$("img").cssAnimate({filter: "blur(4px)"}, 500, "cubic-bezier(1,.55,0,.74)");
  });
});

