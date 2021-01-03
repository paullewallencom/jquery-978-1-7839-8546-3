var marker, map;
function initialize() {
  var myLatlng = new google.maps.LatLng(52.483879,-1.901209);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
  
}

$(document).ready(function() {
  initialize();

  google.maps.event.addListener(map, 'click', function(event) {          
    var duration = parseInt($('#durationOption').val());
    
    if (duration < 0) {
      duration = 1;
      $('#durationOption').val(duration);
    }
    marker.animateTo(event.latLng, {easing: $('#easingOption').val(), duration: duration});
  });
  
  if (window.location.hash == "#iframe") {
    $('#backLink').hide();
    $('#controls').css('height', '55px');
  }
});  