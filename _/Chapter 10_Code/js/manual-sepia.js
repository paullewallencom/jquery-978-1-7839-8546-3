jQuery.fn.sepia = function () {
  $(window).load(function () {
    $('.sepia').each(function () {
      var curImg = $(this).wrap('<span />');
      curImg.attr("src", grayImage(this));
    });
  });

  function grayImage(image) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (var y = 0; y < imgData.height; y++) {
      for (var x = 0; x < imgData.width; x++) {
        var pos = (y * 4) * imgData.width + (x * 4);
        var mono = imgData.data[pos] * 0.32 + imgData.data[pos + 1] * 0.5 + imgData.data[pos + 2] * 0.18;
        imgData.data[pos] = mono + 50;
        imgData.data[pos + 1] = mono;
        imgData.data[pos + 2] = mono - 50;
      }
    }
    ctx.putImageData(imgData, 0, 0, 0, 0, imgData.width, imgData.height);
    return canvas.toDataURL();
  }
};
$.fn.sepia();