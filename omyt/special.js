$(document).ready(function(){
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
