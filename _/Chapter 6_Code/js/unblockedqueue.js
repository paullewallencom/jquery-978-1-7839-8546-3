$(document).ready(function() {
  $(".stop li").hover(
    function () {
      $(this).stop(true, false).animate({width:"100px"},500);
    },
    function () {
      $(this).stop(true, false).animate({width:"80px"},500);
    } 
  );
});