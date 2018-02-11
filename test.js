$(function(){
	$HelloWorld = $("#caption p");
	if ($(document).ready()){
		$HelloWorld.addClass('animated zoomIn');
	}

	$HelloWorld.on('click', function(){
		$HelloWorld.removeClass('zoomIn').addClass('animated rubberBand');
	});

});