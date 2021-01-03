$(document).ready(function(){
  var hideParagraphs = function() {
    $("p").toggle("slow");
  };

  $("button").click(hideParagraphs);	
});