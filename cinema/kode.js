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
});
