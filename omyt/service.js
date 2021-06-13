$(document).ready(function(){
  let rez = $('<div class="blank"></div>');
$('#zapis').click(function(){

    console.log("shto");
    $('body').append(rez);
    $('#exit').removeClass("hidden");
  });
  $('#exit').click(function(){
  rez.remove();
  $(this).addClass("hidden");
    });

  $(".s").click(function(){
    $(".s").addClass("colors");
    $('.k').removeClass("colors");
    $('.j').removeClass("colors");
    $(".changable").html("1 этап");
      $(".changing").html("кабинка наполняется специальным раствором с высоким содержанием солей,что помогает обезопасить людей от воздействия электричества, проходящего через аппарат");
  });
  $(".k").click(function(){
      $(".k").addClass("colors");
      $('.s').removeClass("colors");
      $('.j').removeClass("colors");
    $(".changable").html("2 этап");
    $(".changing").html("трубки проводят внутрь аппарата ток и магнитные шарики; их задача проникать в нейроны мозга и прилипать к участкам со скоплением “тяжелых” воспоминаний");
  });
  $(".j").click(function(){
      $('.j').addClass("colors");
      $('.k').removeClass("colors");
      $('.s').removeClass("colors");
    $(".changable").html("3 этап");
    $(".changing").html("после сбора магнитные шарики выходят, по трубкам возращаются в общий канал и там проходят общую процедуру очищения в конце рабочего дня");

  });
});
