$(function(){
	$HelloWorld = $("#caption p");
	$cookie = $("#ulysse");
	if ($(document).ready()){
		$HelloWorld.addClass('animated zoomIn');
	}

	$HelloWorld.on('click', function(){
		$HelloWorld.removeClass('zoomIn').addClass('animated rubberBand');
	});

	// $cookie.on('mouseover', function(){
	// 	$cookie.addClass('animated infinite slideInLeft');
	// 	// $cookie.removeClass('animated bounce');
	// });

	// $cookie.on('mouseout', function(){
	// 	// $cookie.addClass('animated infinite bounce');
	// 	$cookie.removeClass('animated infinte slideInLeft');
	// });

	// $cookie.on('click', function(){
	// 	$cookie.html(' &#128165; ').removeClass('animated infinte bounce');
	// });

    // Lorsqu'on clique sur "Contact" -> Scroll Smooth vers l'ancre
    $('#contact').on('click', function(e){
	       e.preventDefault(); 
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000 );
	});

});

(function(){

	var scrollY = function () {
		var supportPageOffset = window.pageXOffset !== undefined;
		var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
		return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	};

	var element = document.querySelector('header')
	var top = element.getBoundingClientRect().top + scrollY()
	var onScroll = function () {
		if (scrollY() > top) {
			element.classList.add('fixed')
		}else{
			element.classList.remove('fixed')
		}
	};
	window.addEventListener('scroll', onScroll);

})()

function myFunction(x) {
    x.classList.toggle("change");
}
