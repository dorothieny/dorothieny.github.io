$(document).ready(function(){
    let rez = $('<div class="blank">  <form id="form" method="post"><div class=form1><label for="name"><h1>Имя:</h1></label><input type="text" name="name" placeholder="Ваше имя" id="name"></div><div class=form2><label for="phone"><h1>Телефон:</h1></label><input type="phone" name="phone" placeholder="+7" id="phone"></div><div class="form3"><span>Пол:</span><div class="male"><input type="radio" name="state" id="male inline" value="Мужской"><label id="inline"for="male">Мужской</label></div><div class="female"><input type="radio" name="state" id="female inline" value="Женский"><label  id="inline" for="male">Женский</label></div></div><div id="error" style="color: red"></div><input type="submit" name="submit" value="Готово"></form></div>');
$('#zapis').click(function(){

    console.log("shto");
    $('body').append(rez);
    $('#exit').removeClass("hidden");
  });
  $('#exit').click(function(){
  rez.remove();
  $(this).addClass("hidden");
    });

  $('.b1').click(function(){
    $('.b1').toggleClass('boyboy');
    $('.specialfirst').toggleClass('hidden')
  });

  $('.b2').click(function(){
    $('.b2').toggleClass('');
    $('.specialsecond').toggleClass('hidden');
    $('.slider').toggleClass('hidden')
    $('.slider').slick();

  });


  $('.b3').click(function(){
    $('.b3').toggleClass('cinema');
    $('.button').toggleClass('hidden')

  });

  $('.b4').click(function(){
    $('.b4').toggleClass('domiche');
    $('.pairbut').toggleClass('hidden');

    // $('.specialfirst').toggleClass('hidden')
  });

})
