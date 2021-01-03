function log(msg){
  var output = document.getElementById("output");
  output.innerHTML += "<li>" + msg + "</li>";
}

window.onload = function() {
  var hidden, visibilityChange;

  if (typeof document.hidden !== "undefined") {
    visibilityChange = "visibilitychange";
  }

  document.addEventListener(visibilityChange, function() {
    log(document.visibilityState);
  });
};