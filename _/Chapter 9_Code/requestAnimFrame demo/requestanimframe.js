$(document).ready(function(){
  var canvas, myContext;

  // most browsers have an implementation
  rAF = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || 
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

  function animate() {
    frame = rAF(animate);
    draw();
  }

  $('#startbtn').on('click', animate);

  canvas = $('#myCanvas')[0];
  myContext = canvas.getContext("2d");

  function draw() {
      var time = new Date().getTime() * 0.002;
      var x = Math.sin( time ) * 96 + 128;
      var y = Math.cos( time * 0.9 ) * 96 + 128;

      myContext.fillStyle = 'rgb(245,245,245)';
      myContext.fillRect( 0, 0, 255, 255 );

      myContext.fillStyle = 'rgb(102,51,51)';
      myContext.beginPath();
      myContext.arc( x, y, 10, 0, Math.PI * 2, true );
      myContext.closePath();
      myContext.fill();
  }  
});