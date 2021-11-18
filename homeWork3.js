//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром
let num = 7;

let func = (num) => num**2;

console.log(func(num));


//Сделайте функцию, которая возвращает сумму двух чисел.

let a = 389;
let b = 120;

let sum = (a, b) => a + b;

console.log(sum(a, b));

//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

let c = 120;

let func2 = (a, b, c) => Math.round((a + b) / 3);

console.log(func2(a, b, c));

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function dayWeek (num) {
    switch(num) {
        case 1: {
            return 'Monday';
        }
        case 2: {
            return 'Tuesday';
        }
        case 3: {
            return 'Wednesday';
        }
        case 4: {
            return 'Thursday';
        }
        case 5: {
            return 'Friday';
        }
        case 6: {
            return 'Saturday';
        }
        case 7: {
            return 'Sunday';
        }
        default: {
            'Error';
        }
    }
}

function dayWeek2(num) {
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return arr[num - 1];
}

console.log(dayWeek(num));
console.log(dayWeek2(num));

//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

let func3 = (a, b) => (a === b)? true : false;

console.log(func3(a, b));

//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

let func4 = (a, b) => (a + b > 10)? true : false;

console.log(func4(a, b));

//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

let func5 = (a) => (a < 0)? true : false;

console.log(func5(a));

//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange (a) {
    return (a > 0 && a < 10)? true : false;
}

console.log(isNumberInRange(b));

//Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных

function rgb (a, b, c) {
    if (!(a, b, c)) {
        return 'rgb(0, 0, 0)'
    } 
        return `rgb(${a}, ${b}, ${c})`;
}

console.log(rgb(a, b, c));

//Написать функцию, которая принимает в себя три параметра - число и две функции. Первая переданная функция  возвращает возведенное в квадрат переданное число и будет вызываться, если число четное. Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное, и будет возвращать число, увеличенное на 1.


function threeFunction (num, squareNum, plusNum) {
    if (num % 2 === 0) {
        return squareNum(num);
    } else if (num % 2 !== 0) {
        return plusNum(num);
    }
    
}

function squareNum (a) {
    return a ** 2;
}

function plusNum(a) {
    return a + 1;
}

console.log(threeFunction(num, squareNum, plusNum));

//Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз, сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2. 



function mult (num1=1, num2=2, num3=3) {
    let result = 0;
    for (let i = 0; i < num3; i++) {
        result += num1 * num2;
    }
    return result; 
}

console.log(mult(5, 5, 3));

//Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими 3 словами, расположенными в алфавитном порядке.

function alphabetOrder (word1, word2, word3) {
    let arr = (word1 + word2 + word3).toLowerCase().split('').sort();
    return arr.join('');
}

console.log(alphabetOrder('пес', 'Собака', 'васька'));

//Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

let arr = [1, 3, 5, 6, 7, 8, 11, 15, 18, 25];

function arrFunc (arr) {
    let newArr = []
    for (let item of arr) {
        if (isNumberInRange(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}


// function isNumberInRange (a) {
//     return (a > 0 && a < 10)? true : false;
// }

console.log(arrFunc(arr));

//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

let digit = 156;

function getDigitsSum(digit) {
    let sum = 0
    let arr = String(digit).split('');
    for (let item of arr) {
        sum += +item;
    }
    return sum;
}

console.log(getDigitsSum(digit));

//Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

function sumThirteen () {
    let arr = [];
    for (let i = 1; i < 2020; i++) {
        if (getDigitsSum(i) === 13) {
            arr.push(i);
        } 
    }
    return arr;
}

console.log(sumThirteen());

//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

let isEven = (a) => (a % 2 === 0)? true : false;

console.log(isEven(a));

//Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

let arr2 = [1, 3, 5, 6, 7, 8, 11, 15, 18, 25]; 

function newArrEvenNumber (arr) {
    let newArr = [];
    for (let item of arr) {
        if (+item % 2 === 0) {
            newArr.push(item)
        }
    }
    return newArr;
}

console.log(newArrEvenNumber(arr2));

//Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число без остатка).

function getDivisors(a) {
    let newArr = [];
    for (let i = 0; i < a; i++) {
        if (a % i === 0) {
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(getDivisors(a));

//Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

let arr3 = [1, 3, 5, 6, 7, 8, 11, 15, 18, 25];

function recursivearray(arr3) {
  if (arr3.length > 0) {
    console.log(arr3.shift());
    recursivearray(arr3);
  }
}
recursivearray(arr3);


//Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

function singleDigit(a) {
    let result = 0;
    let count = 0;
    let arr = String(a).split('');
    for (let item of arr) {
        result += +item;
        count++
    }

    if (result > 9) {
        return singleDigit(result);
    } else {
        console.log(`Кол-во итераций: ${count}`);
        return result;
    }
}

console.log(singleDigit(a))


