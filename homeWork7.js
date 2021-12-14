//Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let vegetablesLenght = vegetables.map(function (item) {
//     return item.length;
// });

// console.log(vegetablesLenght);

// let vegetablesLenght = vegetables.map((item) => item.length);

// console.log(vegetablesLenght);


//Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.


// const numbers = [2, 3, 5, 7, 11, 13, 17];


// function currentSums (n) {
//     let arr = [];
    
//     n.reduce(function (prev, current) {
//         prev = prev + current;
//         arr.push(prev);
//         return prev;
//     }, 0);

//     return arr;
// }


// console.log(currentSums(numbers));

//Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];

// function sumSeven(arr) {
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 7) {
//                 newArr.push(`${arr[i]} : ${arr[j]}`)
//             }
//         }
//     }

//     return newArr;
// }

// function getSumSeven (arr) {
//     let newArr = [];
//     arr.forEach(function (el, index) {
//         for (let i = index + 1; i < arr.length; i++) {
//             if (el + arr[i] === 7) {
//                 newArr.push(`${el} : ${arr[i]}`);
//             }
//         }
//     });
//     return newArr;
// }

// console.log(sumSeven(arr));
// console.log(getSumSeven(arr));

//Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str. 

// let str = 'Каждый охотник желает знать, где сидит фазан.';

// function foo (str) {
//     let arr = str.split(' ');

//     let res = arr.map(function(item) {
//         return item[0];
//     });
//     return res;
// }

// console.log(foo(str));

//Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. 

// let str1 = 'JavaScript';


// let foo2 = str => str.split('').map(function (_, index) {
//     if (index === 0) {
//         return str.substring(index, 2);
//     } 
//         return str.substring(index - 1, index + 2);
// });

// console.log(foo2(str1));


//Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// let numerics = [5, 7, 2, 9, 3, 1, 8];

// let res = numerics.sort().reverse();

// console.log(res);


//Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений.


// let a = [1,2,3];
// let b = [4,5,6];
// let c = [7,8,9];

// a.concat(b, c);
// function getArr (a, b, c) {
//     let newArr = [...a, ...b, ...c]; //не работает метод concat, возможно из-за версии ноды
//     return newArr.sort().reverse();
// }


// console.log(getArr(a, b, c));

//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

// let arr1 = [[1, 2, 3], [4, 5], [6]];

// function sumArr(arr) {
//     let newArr = arr.flat();

//     let res = newArr.reduce((prev, curr) => prev + curr); 

//     return res;
// }

// console.log(sumArr(arr1));

//Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.


// let arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// function getSum3(arr) {
//     let newArr = arr.join().split(',');

//     let res = newArr.reduce((prev, curr) => +prev + +curr);
//     // console.log(newArr);
//     return res;
// }


// console.log(getSum3(arr3));
// console.log(arr3.length);


//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// let numerics1 = [5, 7, 2, 9, 3, 1, 8];

// function reverseArr(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         // console.log(arr[i]);
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// const getReverse = (arr) => {
//     return arr.reduceRight((acc, el) => {
//         return [...acc, el];
//     }, []);
// }

// console.log(reverseArr(numerics1));
// console.log(getReverse(numerics1));

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let numerics2 = [5, 2, 2, 9, 3, 1, 8];

// function getSumTen(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (sum > 10) { 
//             return `count ${i + 1} - ${sum}`;
//         }
//     }
    
// }

//reduce 

// function getSumTen1() {
// let count = 1;

//     let resTen = numerics2.reduce(function (sum, curr, i) {

//         if (sum > 10) {
//             return sum;
//         } else
//             count++;
//             return sum + curr;
            
//     });
//     return `${count} - ${resTen}`;
// }


// console.log(getSumTen(numerics2));
// console.log(getSumTen1(numerics2));


//Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill (it, n) {
//     let newArr = [];
//     for (let i = 0; i < n; i++) {
//         newArr.push(it);
//     }
//     return newArr;
// }

// function arrayFill (it, n) {
//     let newArr = new Array(n);
//     return newArr.fill(it, 0, n);
// }

// console.log(arrayFill('x', 5));

//Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

// const user = {
//     name: 'Yurec',
//     surname: 'Chekhov',
// };

// console.log(user);

// const user2 = Object.assign(user);
// const user3 = {...user};

// user2.name = 'Serega';
// console.log(user);
// user3.name = 'Yulia';
// console.log(user);
// console.log(user3);

//Создайте функцию, которая принимает 1 аргумент - объект пользователя user со свойствами name, age, city. Функция должна возвращать новый объект пользователя с измененным полем name, при этом оригинальный объект user должен остаться неизменным.

// const user = {
//     name: 'Yura',
//     city: 'NN',
//     age: 25,
// };

// function newUser (obj) {
//     return newUser = {...obj, name: 'Yulia'}
// }

// console.log(newUser(user));

// console.log(user);

//Написать функцию которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of ...). 


// function sumNum (...args) {
//     let newArr = [...args].reduce(function (prev, curr) {
//         return prev += curr;
//     }, 0);
//     return newArr;
// }

// console.log(sumNum(5, 7, 8, 9));

//Написать функцию, которая принимает слово и возвращает true, если слово является палиндромом.

// let str = 'Дверь';

// function pallindrom (str) {
//     let newStr = str.toLowerCase().split('').reverse().join('');
//     if (str.toLowerCase() === newStr) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(pallindrom(str));

//Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во втором массиве.

// const arr = [2, 3, 5, 6, 4];
// const arr1 = [4, 8, 9, 2, 3];

// function replyItem (arr, arr1) {
//     let newArr = [];
//     arr.forEach(function (el, index) {
//         if (arr1.includes(el)) {
//             newArr.push(el);
//         }
//     });

//     return newArr;
// }


// console.log(replyItem(arr, arr1));




