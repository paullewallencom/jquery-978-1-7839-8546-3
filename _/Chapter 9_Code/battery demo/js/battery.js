// Get the battery
var battery = navigator.battery;  

function batterylog(level) {
  $("#batteryoutput").html("Battery level is " + (level * 100) + "%");

  if (level < 1) {
    $("#statelist").html("Sorry! Content has been disabled, due to low battery power.");
    $("ul#statelist").addClass("batteryimage");
    $("#batteryoutput").removeClass("battery good").addClass("battery low");         
  } else if (level === 1) {
    $("#batteryoutput").removeClass("battery low").addClass("battery good");     
    $("ul#statelist").removeClass("batteryimage");
  } 
}

$(document).on({
  'show.visibility': function() {
    log('visible');
    batterylog(battery.level);
  },
  'hide.visibility': function() {
    log('hidden');
  }
});

function log(msg){
  $("#statelist").append("<li>" + msg + "</li>");
}