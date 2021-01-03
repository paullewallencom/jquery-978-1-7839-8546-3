$(document).ready(function(event){
  var removeParent = function(event) {
    $("#list").parent('li').remove();   
  }

  var removelistItem = function(event) {
    $(event.target).parent().remove();     
  }

  $('li.ui-widget-content').children().on("click", removeParent);

  $('ul').on("click", "li", removelistItem);
});