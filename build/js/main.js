$('.projects__slider_wrap').bxSlider({
	slideWidth: 601,
	minSlides: 1,
	maxSlides: 1,
	moveSlides: 1,
	slideMargin: 0,
	auto: false,
	pause: 7000,
	pager: true,
	mode: 'horizontal',
	nextText: '',
	prevText: '',
	controls: true,
	infiniteLoop: true,
	hideControlOnEnd: false,
	responsive: true,
	adaptiveHeight: false,
	pagerCustom: '#bx-pager'
});

$(".menu-icon").click(function(){
	$(".menu-icon").toggleClass("dont-active");
	$(".header__menu").toggleClass("open");
});