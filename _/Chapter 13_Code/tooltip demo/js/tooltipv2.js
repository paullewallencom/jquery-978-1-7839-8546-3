$(document).ready(function() {
  $('#img-list li a.tooltips').quicktip({ 
    class: 'arrow_box',
    tiptag: "title"
  });

  $('#getValue').on("click", function(event){
  	var tipText = $('a.tooltips').eq(0).data().title;
    $("#dialog").text(tipText);
  	$("#dialog").dialog({
      title: "Text from the first tooltip",
      modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  });

  (function($) {
    var extensionMethods = {
      fadeInValue: 600,
      showDebug: function(event) {
        console.log("This is a test");
      }
    }
    $.extend($.fn.quicktip, extensionMethods);
  })(jQuery);

  $('#img-list li a.tooltips').on("mouseover", function() {
    $('#img-list li a.tooltips').quicktip.showDebug();
  })
});