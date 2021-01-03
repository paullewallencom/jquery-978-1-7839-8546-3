$(document).ready(function(){
  $("input").on("click", function(){
	Caman("#caman-image", function () {
	  this.pinhole().render();
	});
  })	
});