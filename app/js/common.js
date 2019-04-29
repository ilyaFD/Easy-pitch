$( document ).ready(function() {

	function mobile_slider(){
		$slider = $('.image-box');
		$slider_inited = $('.slider__carousel');
		if($(window).width() < 768){
			$slider.addClass('slider__carousel');
		}
		$('.slider__carousel').slick({
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		});
	}
	mobile_slider();
	//form submit
	var form_content = $('.app-form'),
	notification = $('.notification'),
	form = $('#app-from');

	form.submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
			type: 'POST',
			url: 'php/send.php',
			data: form_data,
			success: function() {
				notification.slideToggle();
				form_content.slideToggle();
			}
		});
		$(this)[0].reset();
		return false;
	});

	notification.on('click', function() {
		form_content.slideToggle();
		notification.slideToggle();
	});
	$(".mobile-nav__item").click(function() {
		$(this).toggleClass("mobile-nav__content_show")
	});
});