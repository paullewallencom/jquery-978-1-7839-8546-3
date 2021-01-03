var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") {
	hidden = "hidden";
	visibilityChange = "visibilitychange";
}
 
var videoElement = document.getElementById("videoElement");

function handleVisibilityChange() {
	if (document[hidden]) {
		videoElement.pause();
	} else if (sessionStorage.isPaused !== "true") {
		videoElement.play();
	}
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);
 
videoElement.addEventListener("timeupdate", function(){
  document.title = Math.floor(videoElement.currentTime) + " second(s)";
}, false);