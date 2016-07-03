fullscreen();
$(window).resize(fullscreen);
$(window).scroll(headerParallax);

function fullscreen() {
	var vBackground = $('.vBackground');
	var windowH = $(window).height();
	var windowW = $(window).width();

	vBackground.width(windowW);
	vBackground.height(windowH);
}

function headerParallax() {
	var st = $(window).scrollTop();
	var headerScroll = $('.vBackground h1');

	if (st < 500) {
		headerScroll.css('opacity', 1-st/1000);
		$('.vBackground-arrow ').css('opacity', 0.5-st/250);
		headerScroll.css({
			'-webkit-transform' : 'translateY(' + st/7 + '%)',
			'-ms-transform' : 'translateY(' + st/7 + '%)',
			transform : 'translateY(' + st/7 + '%)'
		});
	}
}
