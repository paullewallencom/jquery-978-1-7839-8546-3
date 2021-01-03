$(document).ready(function() {
  $('#btn').on("click", function() {
    $.when($('li').slideUp(500)).then(function() {
        $("p").text("Finished!");
    });
  });
});