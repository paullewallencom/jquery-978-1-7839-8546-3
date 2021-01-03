$(document).ready(function() {
  $('div').on("click", function (event) {
    console.log('You clicked the outer div');
  });

  $('span').on("click", function (event) {
    console.log('You clicked a span inside of a div element');
    event.stopPropagation();
  });
}); 