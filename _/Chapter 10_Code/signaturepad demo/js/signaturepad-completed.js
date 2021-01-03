$(document).ready(function() {
  $('.sigPad').signaturePad();

  var canvas = $('#canvas')[0], ctx = canvas.getContext('2d');

  $('#download').on('click', function() {
    saveImage();
    downloadCanvas(this, 'canvas', 'signature.png');
  });    

  function saveImage() {
    var api = $('.sigPad').signaturePad();
    var apitext = api.getSignatureImage(); 
    var imageObj = new Image();
    imageObj.src = apitext;
    imageObj.onload = function() {
      ctx.drawImage(imageObj, 0, 0);
    }; 
  } 

  function downloadCanvas(link, canvasId, filename) {
    link.href = $(canvasId)[0].toDataURL();
    link.download = filename;
  }
});