var $video = $('#videoElement');

$(document).on('show.visibility', function() {
  console.log('Page visible');
  favicon.change("img/playing.png");
  $video[0].play();
});

$(document).on('hide.visibility', function() {
  console.log('Page hidden');
  favicon.change("img/paused.png");
  $video[0].pause();
});