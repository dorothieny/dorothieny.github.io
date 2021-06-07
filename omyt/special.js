$(document).ready(function(){
  $('.b1').click(function(){
    $('.b1').toggleClass('boyboy');
    $('.specialfirst').toggleClass('hidden')
  });

  $('.b2').click(function(){
    $('.b2').toggleClass('');
    $('.').toggleClass('hidden')

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
  $('.slider').slick();
})
