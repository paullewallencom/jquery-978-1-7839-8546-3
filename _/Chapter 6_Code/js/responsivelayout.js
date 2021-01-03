$(document).ready(function(){
	$("body").on("change", function(){
		$('body').transition(
			options, [duration], [easing], [complete])
	})
});