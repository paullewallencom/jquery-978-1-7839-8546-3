$(document).ready(function() {
  if (Visibility.isSupported()) {
    $("#APIsupported").html('is supported');
  } else {
    $("#APIsupported").html('isn’t supported');
  }

  document.title = Visibility.state();
  Visibility.change(function (e, state) {
    document.title = state;
  });

  var sec = 0;
  Visibility.every(1000, function () {
    $("#APIcounter").html(sec++);
  });
});