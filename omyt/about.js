$(document).ready(function(){


    let rez = $('<div class="blank">  <form id="form" method="post"><div class=form1><label for="name"><h1>Имя:</h1></label><input type="text" name="name" placeholder="Ваше имя" id="name"></div><div class=form2><label for="phone"><h1>Телефон:</h1></label><input type="phone" name="phone" placeholder="+7" id="phone"></div><div class="form3"><span>Пол:</span><div class="male"><input type="radio" name="state" id="male inline" value="Мужской"><label id="inline"for="male">Мужской</label></div><div class="female"><input type="radio" name="state" id="female inline" value="Женский"><label  id="inline" for="male">Женский</label></div></div><div id="error" style="color: red"></div><input type="submit" name="submit" value="Готово"></form></div>');
  $('#zapis, #zapisi').click(function(){

      console.log("shto");
      $('body').append(rez);
        $('.main').addClass('style');
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
  $('.main').removeClass('style');
$(this).addClass("hidden");
  });
  $('.menue').click(function(){
    //$('.menu').toggleClass('hidden');
    setTimeout(function(){
      $('.menu').toggleClass('css2');
    }, 500);

  })

$('.slider').slick({
  centerMode: true,
 centerPadding: '0px',
 slidesToShow: 3,
 responsive: [
   {
     breakpoint: 1024,
     settings: {
       arrows: true,
       centerMode: true,
       centerPadding: '0px',
       slidesToShow: 1
     }
   },
   {
     breakpoint: 600,
     settings: {
       arrows: true,
       centerMode: true,
       centerPadding: '0px',
       slidesToShow: 1
     }
   }
 ]
});

$(window).on('scroll', function(){
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

if (is_fully_shown('.ty')) {
  console.log(true);
  setTimeout(function(){
    $('.ty').css('animation', 'move 1s ease-in-out 1');
  }, 500);

}
if (is_fully_shown('.yt')) {
  console.log(true);
  setTimeout(function(){
    $('.yt').css('animation', 'moveback 1s ease-in-out 1');
  }, 500);

}
});

});
