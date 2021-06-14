$(document).ready(function() {
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




  let name;
  let review;
  let add_row;
  $("#add").click(function() {
    name = $('[name="imya"]').val();
    review = $('[name="review"]').val();
    add_row = '<div class="card"><h1>' + name + '</h1><p>' + review + '</p></div>'
    $(".holder").append(add_row);
    // $("table tr").last().after(add_row);

    // $('.test').html(week+', '+date+', '+name_of+', '+desc+', '+type);
    $('[name="imya"]').val("");
    $('[name="review"]').val("");
  })
  $("#remove").click(function() {
    $('[name="imya"]').val("");
    $('[name="review"]').val("");})

})
