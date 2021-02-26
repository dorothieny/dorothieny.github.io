$(document).ready(function(){
    $(".ticket").click(function(){
      $(".ticket").addClass("back");
      setTimeout(function(){
        $(".main").addClass("hidden");
      }, 1);
      $(".top").addClass("size");
      $(".footer").addClass("saze");
      $(".main").addClass("none");
    });
});
