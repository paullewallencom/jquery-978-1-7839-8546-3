$(document).ready(function(){
    'use strict';
    var url = 'files.php';
    $('#fileupload').fileupload({
        url: url,
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                var fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
                var fSize = file.size, i=0, fileSizeValue; 
                while(fSize>900){fSize/=1024;i++;}
                fileSizeValue = Math.round(fSize*100)/100 + ' ' + fSExt[i];

                $('#files').append('<li><img src="/5463OS/combined/files/thumbnail/' + file.name + '"><span class="fileDetails">  ' + file.name + '</span> - ' + fileSizeValue + '</li>')
                //alert($(".fileDetails").text());
            });
        },
        progressall: function (e, data) {
            // Update the progress bar while files are being uploaded
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress .bar').css(
                'width',
                progress + '%'
            );
        }
    });
});