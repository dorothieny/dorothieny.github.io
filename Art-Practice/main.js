$(document).ready(function(){
  let price = ['900000 рублей','800000 рублей','600000 рублей','700000 рублей', '800000 рублей'];
  let image = ['<img src="pictures/card1.png">', '<img src="pictures/card2.png">', '<img src="pictures/card3.png">', '<img src="pictures/card4.png">', '<img src="pictures/card5.png">'];
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
    let rez = $('<div class="card"><button id="exit" type="button" name="button">X</button><div class="bl1"><h2>GALAXY CRUISE</h2><p>Cтоимость одного билета: <br>' + price[i] + ' </p><button id="buy" type="button" name="button">Купить билет</button></div><div class="bl2"></div>' + image[i] + '</div>');
    $('body').append(rez);
      $('#buy').click(function(){
        $(this).html('Вы купили билет');
      })
      $('#exit').click(function(){
          $('#buy').html('Купить билет');
      rez.remove();
        });
});

});
