$(document).ready(function() {
  $(".nostop li").hover(
    function () {
      $(this).animate({width:"100px"},500);
    },
    function () {
      $(this).animate({width:"80px"},500);
    } 
  );
});