$(document).ready(function(){
$(window).scroll(function(){
  function is_fully_shown(target) {
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var eh = $(target).height();
	var et = $(target).offset().top;

	if (et >= wt && et + eh <= wh + wt){
		return true;
	} else {
		return false;
	}
}

if (is_fully_shown('.scroll')) {
	console.log(true);
  var wt = $(window).scrollTop();
  var s = $(".scroll").scrollLeft();
  $(window).on('scroll', function() {
    $(".scroll").css('left', 44 - parseInt(wt / 25) + 'vw');
  });
  console.log("scrollLeft = " + s);
}

});
$(".oneone").click(function(){
  $(".hidehover").toggleClass("width");
});
$(".twotwo").click(function(){
  $(".hidehovering").toggleClass("width");
});
$('.slider').slick({
  centerMode: true,
 centerPadding: '0px',
 slidesToShow: 3,
 responsive: [
   {
     breakpoint: 900,
     settings: {
       arrows: false,
       centerMode: true,
       centerPadding: '0px',
       slidesToShow: 3
     }
   },
   {
     breakpoint: 600,
     settings: {
       arrows: false,
       centerMode: true,
       centerPadding: '0px',
       slidesToShow: 1
     }
   }
 ]
});
});
