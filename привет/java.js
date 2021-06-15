'use strict';

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);
// var name;

// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: true
// };
// console.log(obj.name);
// let arr = ['plum.png', 'orange.jpeg', 'apple.png'];
// console.log(arr[1]);

// const answers = [];
// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(answers);

// const category = "toys";
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Hello ${user}`);


let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
let title;
let mark;
let movies = {
   name: null,
   raiting: null,
};
let i = 1;
let films = personaMovieDB.count;
while ( i <= 2) {
  title = prompt("Один из последних просмотренных фильмов","");
  mark = prompt("на сколько оцените его?", "");
  if (mark == "" || title.length > 10 || title == ""){
    alert("Ошибка: введите данные повторно!");
    i = i;
  }else{
    i++;
  }
  
}
if (films < 10){
 alert("Просмотрено мало фильмов");
} else if ( films < 30 && films > 10){
  alert("Достаточно фильмов");
}else{
  alert("Да вы киноман");
}
 
  personaMovieDB.movies[title] = mark;
console.log(personaMovieDB);