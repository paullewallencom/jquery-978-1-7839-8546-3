jQuery.fn.colorUp = function () {
    $(window).load(function () {
        $('.colorup').each(function () {
            var curImg = $(this).wrap('<span />');
            var newImg = curImg.clone().css({ "position": "absolute", "opacity": "0" }).insertBefore(curImg);
            newImg.attr("src", grayImage(this));
            newImg.addClass('colorUpped').animate({ opacity: getInv(curImg) ? 1 : 0 }, getSpeed(curImg));
        });
        $('.colorUpped').mouseover(function () {
            $(this).stop().animate({ opacity: getInv($(this)) ? 0 : 1 }, getSpeed($(this)));
        })
        $('.colorUpped').mouseout(function () {
            $(this).stop().animate({ opacity: getInv($(this)) ? 1 : 0 }, getSpeed($(this)));
        });
    });
    function getSpeed(elem) {
        return (elem.attr("speed")) ? parseInt(elem.attr("speed")) : 1000;
    }
    function getInv(elem) {
        return (elem.attr("inverse") && (elem.attr("inverse") === "true")) ? true : false;
    }

    function grayImage(image) {
        var myCnv = document.createElement("canvas");
        var myCtx = myCnv.getContext("2d");

        myCnv.width = image.width;
        myCnv.height = image.height;
        myCtx.drawImage(image, 0, 0);

        var imgData = myCtx.getImageData(0, 0, myCnv.width, myCnv.height);

        for (var y = 0; y < imgData.height; y++) {
            for (var x = 0; x < imgData.width; x++) {
                var pos = (y * 4) * imgData.width + (x * 4);
                var mono = imgData.data[pos] * 0.32 + imgData.data[pos + 1] * 0.5 + imgData.data[pos + 2] * 0.18;
                imgData.data[pos] = mono + 50;
                imgData.data[pos + 1] = mono;
                imgData.data[pos + 2] = mono - 50;
            }
        }
        myCtx.putImageData(imgData, 0, 0, 0, 0, imgData.width, imgData.height);
        return myCnv.toDataURL();
    }
};
$.fn.colorUp();