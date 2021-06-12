 var counter = 0;
var id = setInterval(func, 1000);

function func(){
  counter++;
  console.log("counter: " + counter)

// setInterval(function(){
//   counter++;
//   console.log("counter: " + counter)
// }, 1000)
if (counter == 6){
  clearInterval(id)
}

}

class Person {
  constructor(name, age, happinnes){
    this.name = name;
    this.age = age;
    this.happinnes = happiness;

  }
}
var alex = new Person("Alex", 45, true);
