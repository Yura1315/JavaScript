

// function sayHi (name='Гость') {
//     return `Добро пожаловать ${name}`;
// }

// console.log(sayHi());


// function degree(a, b=1) {
//     let c = 0;
//     return c = a ** b;
// }

// console.log(degree(2, 3));

// let str = 'qwe';

// function repeatStr (str, rep=2) {
//     return str.repeat(rep);
// }

// console.log(repeatStr(str, 4));

// function equals (a, b) {
//     return (a === b)? true : false;
// }

// console.log(equals(2, 3));

// let num = 3;
// function dayWeek (num) {
//     switch(num) {
//         case 1:
//             console.log ('Понедельник');
//             break;
//         case 2:
//             console.log ('Вторник');
//             break;
//         case 3:
//             console.log ('Среда');
//             break;
//         case 4:
//             console.log ('Четверг');
//             break;
//         case 5:
//             console.log ('Пятница');
//             break; 
//         case 6:
//             console.log ('Суббота');
//             break;   
//         case 7:
//             console.log ('Воскресенье');
//              break;
//         default:
//             console.log('Неврное значение');
//     }
// }

// dayWeek(num);

// let n = 20;


// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         console.log(i);
//       let c = a + b;
//       a = b;
//       b = c;
//       console.log(`i ${i}, a ${a}, b ${b}, c ${c}`);
//     }
//     return b;
//   }

//   fib(n);

//Создать объект который будет описывать любой населенный пункт (на ваш выбор). Объект должен содержать свойства описывающие: название и численность. Так же объект должен содержать два метода: первый должен возвращать название города, а второй должен возвращать численность. 

// class City {
//     constructor(name, populations){
//         this.name = name;
//         this.populations = populations || 'not value';
//     }
//     sayName () {
//         return this.name;
//     }
//     sayPopulation() {
//         return this.populations;
//     }
// }

// const NN = new City('NN', 1300000);
// console.log(NN.sayName());
// console.log(NN.sayPopulation());


// const city = {
//     name: 'NN',
//     populations: 13000000,
//     sayName () {
//         return this.name;
//     },
//     sayPopulation() {
//         return this.populations;
//     },
//     setField (fieldName, value) {
//         return this[fieldName] = value;
//     }
// };

// console.log(city);
// console.log(city);

// const city2 = {
//     name: 'Moscow',
//     populations: 15000000,
// };

// let setField2 = city.setField.bind(city2, 'country', 'Russia');
// setField2();
// console.log(city2);

// sayName.call(city2);

// function parLenght(a) {

//     return (b) => {
//     } 

//     return (h) => {
//         return a * b * h
//     }
// }

// console.log(parLenght(3)(3)(3));

// function getSum(a, b) { 
//     return a + b;
// }

// function getDouble(c) { 
//     return c * 2;
// }

// let sum = getSum(2, 3);

// let double = getDouble(sum);

// console.log(double);

// [1, 2, 3, 4, 5, 6, 7].forEach( (item) => { console.log(item) });

// console.log([3, 5, 7, 1, 2].reverse());

// const reverseArr = (...arr) => {
//     return arr.reduceRight((acc, el) => {
//         return [...acc, el];
//     }, []);
// }

// const obj = {
//     name: 'lox',
//     surname: 'Pes',
// }

// const obj_2 = {};
// Object.assign(obj_2, {...obj});

// const obj_2 = Object.assign(obj);
// obj.name = 'vasya';
// console.log(obj_2);
// console.log(obj);

// Object.assign(obj_2, ...obj);
// obj_2 = {...obj};
// console.log(obj_2);

// const obj_2 = {}
// for (let key in obj) {
//     obj_2[key] = obj[key];
// }

// const obj_2 = {name, surname} = obj;

// obj_2 = obj;

// console.log(obj.name = 'vasya');
// console.log(obj);
// console.log(obj_2);


// let a = [ 1, 2 ]
// let b = [ 4, 5 ] 
// let c = [ 6, 7 ]

// let newArr = [...a, ...b, ...c];
// console.log(a);

// let str = 'ты мой поросеночек. Марсик мой зайчик. Скоро новый год. Мы уезжаем на каникулы';

// function getTwoSentence(str) {
//     let pos = str.indexOf('.', 0);
//     let pos2 = str.indexOf('.', ++pos)
//     let newStr = str.slice(0, ++pos2);

//     return newStr;
// }

// function getTwoSentence (str) {
//     let newArr = str.split('.')
//     return newArr.slice(0, 2).join('.');
// }

// console.log(getTwoSentence(str));

// // let pos = 0;
// console.log(str.slice(-1));

// let a = [1, 4, 5];
// let b = [1, 5, 7];

// function sumArr(a, b) {
//     return [...a, ...b].reduce((prev, it) => { return prev += it});
// }

// console.log(sumArr(a, b));

// let arr = [1, 2, 3, 4, 7, 9, 10];
// let arr1 = [2, 2, 3, 3, 1, 2];

// function sumArr(arr, arr1) {
//     if (arr.length > arr1.length) {
//         arr = arr.slice(0, arr1.length)
//     }
//     arr1 = arr1.slice(0, arr.length)

//     let res = arr.map(function(el, i) {
//         return el + arr1[i];
//     });

//     return res;
// }

// console.log(sumArr(arr, arr1));


// function sayName () {
//     console.log(this.name);
// }

// const obj = {
//     name: 'Yura',
// }

// const say = sayName.bind(obj);
// say();

// sayName.call(obj);

// var x = 10;

// function foo() {
//     var y = 20;

//     function bar() {
//         return z = y + x;
//     }
//     bar();
// }

// console.log(foo());
