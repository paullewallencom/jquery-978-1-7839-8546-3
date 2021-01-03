var fs = container = document.getElementById("container");
var gui = require('nw.gui'), win = gui.Window.get();

$(document).on('click', '#minimize', function () {
  win.minimize();
});

$(document).on('click', '#close', function () {
  win.close();
});
