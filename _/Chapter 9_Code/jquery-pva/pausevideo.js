$(document).ready(function() {
  sessionStorage.isPaused = "false";

  var hidden, visibilityChange; 
  if (typeof document.hidden !== "undefined") {
	hidden = "hidden";
	visibilityChange = "visibilitychange";
  }
 
  var videoElement = document.getElementById("video-38-1");

  function handleVisibilityChange() {
	if (document[hidden]) {
		videoElement.pause();
	} else if (sessionStorage.isPaused !== "true") {
		videoElement.play();
	}
  }

  if (typeof document.addEventListener === "undefined" || typeof hidden === "undefined") {
	alert("This demo requires a browser such as Google Chrome that supports the Page Visibility API.");
  }

  document.addEventListener(visibilityChange, handleVisibilityChange, false);
    
    
  // when the video pauses, set the favicon
  videoElement.addEventListener("pause", function(){
    if (!document[hidden]) {
      // if not pausing because document is now hidden, then set isPaused to true
      sessionStorage.isPaused = "true";
    }
  }, false);
    
  // when the video plays, set the isPaused state and the favicon
  videoElement.addEventListener("play", function(){
    sessionStorage.isPaused = "false";
  }, false);
    
    // set the document (tab) title from the current video time
  videoElement.addEventListener("timeupdate", function(){
	document.title = Math.floor(videoElement.currentTime) + " second(s)";
  }, false);
});