$(function(){
		$HelloWorld = $("#caption p");
		
		if ($(document).ready()){
			$HelloWorld.addClass('animé zoom');
		}

		$HelloWorld.on('click', function(){
			$HelloWorld.removeClass('zoom').addClass('animé elastique');
		});

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

function burger(x) {
    x.classList.toggle("change");
}
