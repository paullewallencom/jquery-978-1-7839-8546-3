$(document).ready(function(){
  $("input[name='css']").on("click", function(){
    $("img").cssAnimate({"filter" : "hue-rotate(50deg)"}, 500, "cubic-bezier(1,.55,0,.74)");
  });
});