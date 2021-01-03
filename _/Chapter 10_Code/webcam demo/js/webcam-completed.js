$(document).ready(function() {
  var idx = 0;
  var filters = ['grayscale', 'sepia', 'blur', 'saturate', ''];

  var canvas = $("canvas")[0],
    context = canvas.getContext("2d"),
    video = $("video")[0], localStream,
    videoObj = { "video": true },
    errBack = function(error) {
      console.log("Video capture error: ", error.code); 
    };

  function changeFilter(e) {
    var el = e.target;
    el.className = '';
    var effect = filters[idx++ % filters.length];
    if (effect) {
      el.classList.add(effect);
    }
  }

  function downloadCanvas(link, canvasId, filename) {
    link.href = $(canvasId)[0].toDataURL();
    link.download = filename;
  }

  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

  $("#startplay").on("click", function(e) {
    if (navigator.getUserMedia) {
      navigator.getUserMedia(videoObj, function(stream) {
        video.src = window.URL.createObjectURL(stream);
        localStream = stream;
        video.play();
      }, errBack);
    }
  });

  $("#snap").on("click", function() {
    context.drawImage(video, 0, 0, 320, 240);
  });

  $("#stopplay").on("click", function(e, stream) {
    localStream.stop(); 
  });

  $('#canvas').on('click', changeFilter);

  $("#download").on('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    $("#download").prop("href", dataURL);
  }); 

});

