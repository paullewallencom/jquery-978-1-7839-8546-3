$(document).ready(function(){
   var $description;

   var displaytext = function(data) {
      var $response = $(data), $info = $("#info");
      var $title = $('<h1>').text($response.find(".title").text());
      $('#info').append($title);

      $response.find(".description").each(function(){
         $(this).appendTo($info);
      });            
   };

   $('#action-button').click(function() {
      $.ajax({
         url: 'content.html',
         error: function() {
            $('#info').html('<p>An error has occurred</p>');
         },
         dataType: 'html',
         success: displaytext,
         type: 'GET'
      });
   });
});

            /*ar $description1 = $('<p>').text($response.find(".description:eq(0)").text());
            var $description2 = $('<p>').text($response.find(".description:eq(1)").text());
            var $description3 = $('<p>').text($response.find(".description:eq(2)").text());
            var $description4 = $('<p>').text($response.find(".description:eq(3)").text());*/