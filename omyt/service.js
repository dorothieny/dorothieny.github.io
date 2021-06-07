$(document).ready(function(){
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
    $(".changing").html("трубки проводят внутрь апарата ток и магнитные шарики; они и являются основными элементами аппарата: их задача проникать в нейроны мозга и прилипать к участкам со скоплением “тяжелых” воспоминаний");
  });
  $(".j").click(function(){
      $('.j').addClass("colors");
      $('.k').removeClass("colors");
      $('.s').removeClass("colors");
    $(".changable").html("3 этап");
    $(".changing").html("после сбора шарики по трубкам возращаются в общий канал и там проходят процедуру очищения");

  });
});
