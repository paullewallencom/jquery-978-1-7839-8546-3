$(document).ready(function() {
	(function() {

		var requestID;

		var canvas = document.getElementById('stage');
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = '#212121';

		var posX = 0;
		var boxWidth = 50;
		var pixelsPerFrame = 5; 

		ctx.fillRect(posX, 0, boxWidth, canvas.height);

		function animate() {
			requestID = requestAnimationFrame(animate);

			if (posX <= (canvas.width - boxWidth)) {
				ctx.clearRect((posX - pixelsPerFrame), 0, boxWidth, canvas.height);
				ctx.fillRect(posX, 0, boxWidth, canvas.height);
				posX += pixelsPerFrame;
			} else {
				cancelAnimationFrame(requestID);
			}
		}

		$("#startBtn").on('click', function(e) {
			e.preventDefault();
			requestID = requestAnimationFrame(animate);
		});

		$("#stopBtn").on('click', function(e) {
			e.preventDefault();
			cancelAnimationFrame(requestID);
		});

		$("#resetBtn").on('click', function(e) {
			e.preventDefault();
			posX = 0;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillRect(posX, 0, boxWidth, canvas.height);
		});
	}());
})