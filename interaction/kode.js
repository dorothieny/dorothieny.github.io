$(document).ready(function(){
    $(".ticket").click(function(){
      $(".ticket").addClass("back");
      setTimeout(function(){
        $(".main").addClass("hidden");
      }, 1);
      $(".top").addClass("size");
      $(".footer").addClass("saze");
      setTimeout(function(){
        $(".screenone").addClass("none");
      }, 7000);
    $(".screentwo").removeClass("none");
    setTimeout(function(){
      $(".screentwo").css("opacity", "1");
    }, 6000);

    });
});
