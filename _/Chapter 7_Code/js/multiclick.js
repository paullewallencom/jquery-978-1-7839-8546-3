$(document).ready(function() {
  var addText = ("Click!<br>");
  var addBoom = ("Boom...!<br>")

  $("button").on("click", function($event) { 
  	$("p").append(addText); 
  });

  $("button").on("multiclick", { clicks: 3 }, function($event) { 
  	$("p").append(addBoom); 
  });
});