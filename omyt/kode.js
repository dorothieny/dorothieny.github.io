$(document).ready(function(){
$(window).scroll(function(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.scroll').offset().top;
	var eh = $('.scroll').outerHeight();
	var dh = $(document).height();
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		console.log('Элемент показан');
	}
});
});
