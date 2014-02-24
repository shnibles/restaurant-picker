/*
	Draws and animates the spinner.
*/

$(function() {
	drawSpinner();
	drawSpinnerText();
	animateSpinner();
});

function drawSpinner() {
	var canvas = $('#spinner')[0];
	var context = canvas.getContext('2d');

	var radius = 200;

	// spinner background
	context.fillStyle = "#AAA"; 
	context.beginPath();
	context.arc(300, 300, radius, 0, Math.PI * 2);
	context.closePath();
	context.fill();
}

function drawSpinnerText() {
	var canvas = $('#spinner')[0];
	var context = canvas.getContext('2d');

	// spinner text
	var text = "Thaiger Room"
	context.fillStyle = "#222";
	var font = "bold 24px serif";
	context.font = font;

	var len = text.length;
	context.save();
	context.translate(300, 280);
	context.rotate(-1 * (Math.PI * .3) / 2);
	context.rotate(-1 * ((Math.PI * .3) / len) / 2);
	for (var i = 0; i < len; i++) {
		context.rotate((Math.PI * .3) / len);
		context.save();
		context.translate(0, -1 * 200);
		s = text[i];
		context.fillText(s, 0, 0);
		context.restore();
	}
	context.restore();
}


function animateSpinner() {
	$('#spinner').click(function(e) {
		$(this).toggleClass('spinning');
	});
}