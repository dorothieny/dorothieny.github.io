$(document).ready(function(){



    let rez = $('<div class="blank">  <form id="form" method="post"><div class=form1><label for="name"><h1>Имя:</h1></label><input type="text" name="name" placeholder="Ваше имя" id="name"></div><div class=form2><label for="phone"><h1>Телефон:</h1></label><input type="phone" name="phone" placeholder="+7" id="phone"></div><div class="form3"><span>Пол:</span><div class="male"><input type="radio" name="state" id="male inline" value="Мужской"><label id="inline"for="male">Мужской</label></div><div class="female"><input type="radio" name="state" id="female inline" value="Женский"><label  id="inline" for="male">Женский</label></div></div><div id="error" style="color: red"></div><input type="submit" name="submit" value="Готово"></form></div>');
  $('#zapis, #zapisi').click(function(){

      console.log("shto");
      $('body').append(rez);
      $('#exit').removeClass("hidden");
      document.getElementById('form').addEventListener("submit", checkForm);

function checkForm(event){
  event.preventDefault();
  var el = document.getElementById('form');
  var name = el.name.value;
  var phone = el.phone.value;
  var state = el.state.value;

  var fail = ""

  if (name == "" || phone == "" || state == ""){
     fail = "Заполните все поля";
  }
  else if (name.length <= 1 || name.length > 10){
    fail = "Введите корректное имя";
  }
  else if(phone.split("+").length != 2 || phone.length != 12){
    fail = "Некорректный телефон";
  }

  if(fail != ""){
    document.getElementById('error').innerHTML = fail;

    return false;
  }
  else{
    alert("Все данные получены");
    window.location = "https://dorothieny.github.io/omyt/";
  }
}

});
    $('#exit').click(function(){
    rez.remove();
    $(this).addClass("hidden");
      });
      $('.menue').click(function(){
        $('.menu').toggleClass('hidden');
        setTimeout(function(){
          $('.menu').toggleClass('css2');
        }, 300);

      })
$(window).scroll(function(){
  function is_fully_shown(target) {
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var eh = $(target).height();
	var et = $(target).offset().top;
  //var sc = $(window).innerWidth

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
    if (window.matchMedia('all and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)').matches) {
    $(".scroll").css('left', 30 - parseInt(wt / 9) + '%');
  } else if((window.matchMedia('all and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)').matches)){
    $(".scroll").css('left', 32 - parseInt(wt / 18) + '%');
  }
  else {
  $(".scroll").css('left', 44 - parseInt(wt / 25) + '%');
  }
});
  console.log("scrollLeft = " + s);
}

});
$(".oneone").click(function(){
  $(".hidehover").toggleClass("width");
  $(".pa").toggleClass('css');
});
$(".twotwo").click(function(){
  $(".hidehovering").toggleClass("width");
  $(".ap").toggleClass('css');
});

});
