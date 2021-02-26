$(document).ready(function(){
    $(".ticket").click(function(){
      $(".ticket").addClass("back");
      setTimeout(function(){
        $(".main").addClass("hidden");
      }, 1);
      $(".main").addClass("none");
    });
});
