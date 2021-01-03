$(document).ready(function(){
  var $noise      = $('#noisebtn');
  var $contrast   = $('#contrastbtn');
  var $color      = $('#colorbtn');
  var $reset      = $('#resetbtn');

  var canvas = $('#canvas');
  var ctx    = canvas[0].getContext("2d");
  var img = new Image();
  img.src = "img/flowers.jpg";
  ctx.drawImage(img, 0, 0);

  $reset.on('click', function(e){
    e.preventDefault();
    var img = new Image();
    img.src = "img/flowers.jpg";
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
    ctx.restore();
    ctx.drawImage(img, 0, 0);
    Caman('#canvas', 'img/flowers.jpg', function(){
      this.revert(false);
      this.render();
    });
  });

  $noise.on('click', function(e){
    e.preventDefault();
    Caman('#canvas', 'img/flowers.jpg', function(){
      this.noise(10).render();
    });
  });

  $contrast.on('click', function(e){
    e.preventDefault();
    Caman('#canvas', 'img/flowers.jpg', function(){
      this.contrast(10).render();
    });
  });

  $color.on('click', function(e){
    e.preventDefault();
    Caman('#canvas', 'img/flowers.jpg', function(){
      this.colorize("#3c69da", 10).render();
    });
  });
});
