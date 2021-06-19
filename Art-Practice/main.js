$(document).ready(function(){
  let price = ['900000 рублей','800000 рублей','600000 рублей','700000 рублей', '800000 рублей'];
  let image = ['<img src="pictures/card1.png">', '<img src="pictures/card2.png">', '<img src="pictures/card3.png">', '<img src="pictures/card4.png">', '<img src="pictures/card5.png">'];
  let text = ['<p><b>Галактический круиз «Венера любви»</b></p><p><b>Планета Венера - Планета XМX+02 - Планета 004</b> <br>Общее расстояние: 130,5 миллиона километров. <br>Время в пути: 1 ч. 32 мин. <br>Время на осмотр космоса (без учёта обеда): 4 ч. 40 мин. <br>Общее расчётное время (без учёта обеда): 5 ч. 50 мин.</p>',
'<p><b>Галактический круиз «Метеоритный Корпоратив»</b></p><p><b>Планета МММ1 - Планета XМX+02 - Планета 004 </b> <br>Общее расстояние: 130,5 миллиона километров.<br>Время в пути: 2 ч. 32 мин.<br>Время на осмотр космоса (без учёта обеда): 4 ч. 40 мин.<br>Общее расчётное время (без учёта обеда): 5 ч. 50 мин.</p>',
'<p><b>Галактический круиз «Лунное День Рождения»</b></p><p><b>Луна - Планета XМX+02 - Планета 324</b> <br>Общее расстояние: 130,5 миллиона километров.<br>Время в пути: 2 ч. 32 мин.<br>Время на осмотр космоса (без учёта обеда): 4 ч. 40 мин.<br>Общее расчётное время (без учёта обеда): 5 ч. 50 мин.</p>'];
  let i = 0;
$('#f').click(function(){
  i = 0;
    let rez = $('<div class="card"><button id="exit" type="button" name="button">X</button><div class="bl1"><h2>GALAXY CRUISE</h2><p>Cтоимость одного билета: <br>' + price[i] + ' </p><button id="buy" type="button" name="button">Купить билет</button></div><div class="bl2">' + image[i] + '</div></div>');
    $('body').append(rez);
      $('#buy').click(function(){
        $(this).html('Вы купили билет');
      })
      $('#exit').click(function(){
          $('#buy').html('Купить билет');
      rez.remove();
        });
});
$('#f1').click(function(){
     i = 1;
    let rez = $('<div class="card"><button id="exit" type="button" name="button">X</button><div class="bl1"><h2>GALAXY CRUISE</h2><p>Cтоимость одного билета: <br>' + price[i] + ' </p><button id="buy" type="button" name="button">Купить билет</button></div><div class="bl2">' + image[i] + '</div></div>');
    $('body').append(rez);
      $('#buy').click(function(){
        $(this).html('Вы купили билет');
      })
      $('#exit').click(function(){
          $('#buy').html('Купить билет');
      rez.remove();
        });
});

$('#f2').click(function(){
     i = 2;
    let rez = $('<div class="card"><button id="exit" type="button" name="button">X</button><div class="bl1"><h2>GALAXY CRUISE</h2><p>Cтоимость одного билета: <br>' + price[i] + ' </p><button id="buy" type="button" name="button">Купить билет</button></div><div class="bl2">' + image[i] + '</div></div>');
    $('body').append(rez);
      $('#buy').click(function(){
        $(this).html('Вы купили билет');
      })
      $('#exit').click(function(){
          $('#buy').html('Купить билет');
      rez.remove();
        });
});
$('#f3').click(function(){
     i = 3;
    let rez = $('<div class="card"><button id="exit" type="button" name="button">X</button><div class="bl1"><h2>GALAXY CRUISE</h2><p>Cтоимость одного билета: <br>' + price[i] + ' </p><button id="buy" type="button" name="button">Купить билет</button></div><div class="bl2">' + image[i] + '</div></div>');
    $('body').append(rez);
      $('#buy').click(function(){
        $(this).html('Вы купили билет');
      })
      $('#exit').click(function(){
          $('#buy').html('Купить билет');
      rez.remove();
        });
});
$('#f4').click(function(){
     i = 4;
    let rez = $('<div class="card"><button id="exit" type="button" name="button">X</button><div class="bl1"><h2>GALAXY CRUISE</h2><p>Cтоимость одного билета: <br>' + price[i] + ' </p><button id="buy" type="button" name="button">Купить билет</button></div><div class="bl2">' + image[i] + '</div></div>');
    $('body').append(rez);
      $('#buy').click(function(){
        $(this).html('Вы купили билет');
      })
      $('#exit').click(function(){
          $('#buy').html('Купить билет');
      rez.remove();
        });
});
$('#d').click(function(){
  i = 0;
    let zer = $('<div class="carding"><button id="exit" type="button" name="button">X</button><div class="ds"><h1>GALAXY CRUISE</h1>'+ text [i]+'<p><b>Для заказа тура необходимо связаться с нашим менеджером:</b></p><p>+7(989)789-04-01</p><p>+7(123)189-14-21</p></div><div class="sd"></div></div>');
    $('body').append(zer);
    $('.sd').css("background-image", "url('pictures/love.png')")
      $('#exit').click(function(){
      zer.remove();
        });
});

$('#d1').click(function(){
  i = 1;
    let zer = $('<div class="carding"><button id="exit" type="button" name="button">X</button><div class="ds"><h1>GALAXY CRUISE</h1>'+ text [i]+'<p><b>Для заказа тура необходимо связаться с нашим менеджером:</b></p><p>+7(989)789-04-01</p><p>+7(123)189-14-21</p></div><div class="sd"></div></div>');
    $('body').append(zer);
      $('.sd').css("background-image", "url('pictures/coorp.png')")
      $('#exit').click(function(){
      zer.remove();
        });
});

$('#d2').click(function(){
  i = 2;
    let zer = $('<div class="carding"><button id="exit" type="button" name="button">X</button><div class="ds"><h1>GALAXY CRUISE</h1>'+ text [i]+'<p><b>Для заказа тура необходимо связаться с нашим менеджером:</b></p><p>+7(989)789-04-01</p><p>+7(123)189-14-21</p></div><div class="sd"></div></div>');
    $('body').append(zer);
      $('.sd').css("background-image", "url('pictures/dr.png')")
      $('#exit').click(function(){
      zer.remove();
        });
});


});
