$(document).ready(function(){

	$('.slider').bxSlider({
		pager: false,
		responsive: true,
		touchEnabled: true
	});

	$('.btn_menu').click(function(){
		$(this).parent().children('ul').toggleClass('active');
		return false;
	});
});