Modernizr.addTest('pagevisibility', !!Modernizr.prefixed("hidden", document, false));

function log(msg){
  var output = document.getElementById("output");
  output.innerHTML += "<li>" + msg + "</li>";
}

window.onload = function() {
  if (Modernizr.pagevisibility) {
    var hidden, visibilityState, visibilityChange;

    if (typeof document.hidden !== "undefined") {
      visibilityChange = "visibilitychange";
      visibilityState = "visibilityState";
    }      

    document.addEventListener(visibilityChange, function() {
      log(document[visibilityState]);
    });
  } else {
    document.getElementById('content').innerHTML = "Sorry, your browser doesn't support Page Visibility API.";
  }
};