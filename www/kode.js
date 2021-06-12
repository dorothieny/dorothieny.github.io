 // var text = document.getElementById('text');
 // console.log(text);
 // text.style.color = 'RED';
 //
 // var spans = document.getElementsByTagName('span');
 //  for(var i = 0; i < spans.length; i++){
 //    console.log(spans[i].innerHTML);
 //  }
 document.getElementById('main_form').addEventListener("submit", checkForm)
 function checkForm(event){
  event.preventDefault();
  var el = document.getElementById("main_form")
  var name = el.name.value;
  var pass = el.pass.value;
  console.log(name , pass );
}
