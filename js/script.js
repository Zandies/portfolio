$(function(){
		$HelloWorld = $("#caption p");
		$burger = $('.burger');
		$nav = $('nav');

		$burger.on('click', function(){
			$('body').toggleClass('site-push');
			$('.bg-parallax, #box1, #box2, #box3, #box4, footer').click(function(){
				$('body').removeClass('site-push');
				$burger.removeClass('change');
			})
		})

		$('#code').on('click', function(){
			$('.subnav-option-burger').toggleClass('subnav-option-burger-visible');
		});


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

	var header = document.querySelector('header')
	var nav = document.querySelector('nav')
	var infoArticle = document.querySelector('aside')

	var top = header.getBoundingClientRect().top + scrollY()
	var onScroll = function () {
		if (scrollY() > top) {
			header.classList.add('fixed');
			nav.classList.add('fixed-nav');
			infoArticle.classList.add('scroll');
		}else{
			header.classList.remove('fixed');
			nav.classList.remove('fixed-nav');
			infoArticle.classList.remove('scroll');
		}
	};
	window.addEventListener('scroll', onScroll);

})()

function burger(x) {
	var nav = document.querySelector('nav')
    x.classList.toggle("change");
    // nav.style.transform = "translateX(0)"
}
