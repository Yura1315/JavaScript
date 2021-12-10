//Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// let vegetablesLenght = vegetables.map(function (item) {
//     return item.length;
// });

// console.log(vegetablesLenght);

let vegetablesLenght = vegetables.map((item) => item.length);

console.log(vegetablesLenght);


//Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.


const numbers = [2, 3, 5, 7, 11, 13, 17];


function currentSums (n) {
    let arr = [];
    
    n.reduce(function (prev, current, index) {
        return arr[index] = prev + current;
    }, 0);

    return arr;
}


console.log(currentSums(numbers));

//Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

const arr = [0, 1, 2, 3, 4, 5, 6, 7];

// function sumSeven(numbers) {
//     let arr = [];

//     numbers.reduce(function (prev, current, index) {
//         if (prev + current !== 7) {
//             current[index++];
//         } else
//         return arr.push(`${prev} : ${current}`);
//     });
    
//     return arr;
// }

function sumSeven(arr) {
    let cloneArr = arr.slice();
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < cloneArr.length; j++) {
            if (arr[i] + cloneArr[j] === 7) {
                newArr.push(`${arr[i]} : ${cloneArr[j]}`)
            }
        }
    }

    return newArr;
}

console.log(sumSeven(arr));

//Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str. 

let str = 'Каждый охотник желает знать, где сидит фазан.';

function foo (str) {
    let arr = str.split(' ');

    let res = arr.map(function(item) {
        return item[0];
    });
    return res;
}

console.log(foo(str));

//Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str. 

// let str1 = 'JavaScript';

// function foo1 (str) {
//     let arr = str.split('');

//     let res = arr.reduce(function (prev, curr, i) {
//         return prev + prev;
//     });

//     return res;
// }

// console.log(foo1(str1));



//Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

let numerics = [5, 7, 2, 9, 3, 1, 8];

let res = numerics.sort().reverse();

console.log(res);


//Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений.


let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,9];

a.concat(b, c);
function getArr (a, b, c) {
    let newArr = [...a, ...b, ...c]; //не работает метод concat, возможно из-за версии ноды
    return newArr.sort().reverse();
}


console.log(getArr(a, b, c));

//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

let arr1 = [[1, 2, 3], [4, 5], [6]];



function sumArr(arr) {
    let newArr = arr.flat();

    let res = newArr.reduce((prev, curr) => prev + curr); 

    return res;
}

console.log(sumArr(arr1));

//Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.


let arr3 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function getSum3(arr) {
    let newArr = arr.join().split(',');

    let res = newArr.reduce((prev, curr) => +prev + +curr);
    // console.log(newArr);
    return res;
}


console.log(getSum3(arr3));
// console.log(arr3.length);

// function getSum4(arr) {
//     let newArr = [];
//     res = arr.forEach(item => {
//         if (Array.isArray(item)) {
//             getSum4(item);
//         }
//         newArr.push(item);
//     });

//     return newArr;
// }

// console.log(getSum4(arr3));




//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

let numerics1 = [5, 7, 2, 9, 3, 1, 8];

function reverseArr(arr) {
    let newArr = [];
    for (let i = arr.length; i >= 0; i--) {
        // console.log(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArr(numerics1));

//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let numerics2 = [5, 2, 2, 9, 3, 1, 8];

function getSumTen(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > 10) {
            return `count ${i} - ${sum}`;
        }
    }
    
}

//reduce 

function getSumTen1() {
let count = 0;

    let resTen = numerics2.reduce(function (sum, curr, i) {

        if (sum > 10) {
            return sum;
        } else
            count++;
            return sum + curr;
            
    });
    return `${count} - ${resTen}`;
}


console.log(getSumTen(numerics2));
console.log(getSumTen1(numerics2));


//Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
