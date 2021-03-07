$(document).ready(function(){
    $(".chel").click(function(){
      $(".chel").toggleClass("sit");
    });
    // $(".fi").click(function(){
    //     $(".chel.sit").addClass("stand");
    //     $(".chel.sit").removeClass("sit")
    //     setTimeout(function(){
    //       $(".chel.stand").removeClass("stand");
    //     }, 1200);
    //   });
  //   $('.chel').click(function() {
  // if (!$(".chel").hasClass('stand')) {
  //   $(this).addClass('stand');
  // } else {
  //   $(".chel").addClass('sit');
  // }
// });
    $(".man").click(function(){
      $(".man").addClass("kiss");
      setTimeout(function(){
            $(".man.kiss").removeClass("kiss");
          }, 3500);
    });
    $(".nebol").click(function(){
      $(".palez").addClass("ts");
      setTimeout(function(){
            $(".palez.ts").removeClass("ts");
          }, 3500);
    });
});

$(document).ready(function(){
var currentPosition = 0;
var slideWidth = 560;
var slides = $('.slide');
var numberOfSlides = slides.length;

$('#slidesContainer').css('overflow', 'hidden');

slides
.wrapAll('<div id="slideInner"></div>')

.css({
'float' : 'left',
'width' : slideWidth
});

$('#slideInner').css('width', slideWidth * numberOfSlides);

$('#slideshow')
.prepend('<span class="control" id="leftControl">Move left</span>')
.append('<span class="control" id="rightControl">Move right</span>');

manageControls(currentPosition);

$('.control')
.bind('click', function(){

currentPosition = ($(this).attr('id')=='rightControl')
? currentPosition+1 : currentPosition-1;

manageControls(currentPosition);

$('#slideInner').animate({
  'marginLeft' : slideWidth*(-currentPosition)
});
});

function manageControls(position){

if(position==0){ $('#leftControl').hide() }
else{ $('#leftControl').show() }

if(position==numberOfSlides-1){ $('#rightControl').hide() }
else{ $('#rightControl').show() }
}
});
