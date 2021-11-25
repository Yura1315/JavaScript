//1. Удаление указанного количества символов из строки 
//Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

let str = 'Каждый охотник желает знать';

function deleteCharacters (str, lenght) {
    return str.slice(0, lenght)
}


console.log(deleteCharacters(str, 10));
//================================================================================================================================================
//Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

let str2 = 'HTML JavaScript PHP';

function insertDash (str) {
    return str.split(' ').join('-');
}

console.log(insertDash(str2));

//================================================================================================================================================
//Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

let str4 = 'string not starting with capital';

function cursiveLetter (str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(cursiveLetter(str4));



//================================================================================================================================================
//Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

let str5 = "каждый охотник желает знать";

let map = str5.split(' ').map(function(item) {
    return item[0].toUpperCase() + item.slice(1)
});

console.log(map.join(' '));



function capitalize (str) {
    let arr = str.split(' ');
    let newStr = '';
    for (item of arr) {
        newStr += item[0].toUpperCase() + item.slice(1) + ' ';
    }
    return newStr;
}

console.log(capitalize(str5));

//================================================================================================================================================
//Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

let str6 = 'КаЖдЫй ОхОтНиК жЕлАеТ зНаТь';

function changeRegister(str) {
    let arr = str.split('');
    let newArr = [];
    for (item of arr) {
        if (item === item.toUpperCase()) {
        newArr.push(item.toLowerCase());
    } else
        newArr.push(item.toUpperCase());
    }
    return newArr.join('');
}

console.log(changeRegister(str6));

function changeRegister1(str) {
    let arr = str.split('');
    let map = arr.map(function(item) {
        let newArr = [];
        if (item === item.toUpperCase()) {
            newArr.push(item.toLowerCase());
        } else
            newArr.push(item.toUpperCase());
        return newArr;
    });

    return map.join('')
}

console.log(changeRegister1(str6));

//================================================================================================================================================
//Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

let str7 ="every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  


function removeChar(str) {
    let arr = str.split('');
    let characterArr = ['.', ',', '-', '/', '#', ';', ':', '{', '}', '$', '%', '^', '&', '!', '*'];
    let newArr = [];
    for (item of arr) {
        if (!characterArr.includes(item)) {
            newArr.push(item);
        } 
        
    }
    return newArr.join('').replace(/\s+/g, ' ');
}


console.log(removeChar(str7));

//================================================================================================================================================
//Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

let sign = '+'

function zeros (num, len, sign) {
    return sign + num + '0'.repeat(len-1);
}

console.log(zeros(5, 5, sign))

//================================================================================================================================================
//Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

function comparison(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    } else
        return false;
};

console.log(comparison(str6, str5));

let equalsStr = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

console.log(equalsStr(str5, str7));

//================================================================================================================================================
//Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.


let insensitiveSearch = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase());


console.log(insensitiveSearch('Я пошел гулять на горку','вася'));

//================================================================================================================================================
//Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.


let str8 = "hEllo world";

function initCap(str) {
    let arr = str.toLowerCase().split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            newArr.push(arr[++i].toUpperCase());
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join('');
};

console.log(initCap(str8));




//================================================================================================================================================
//Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

let str9 = "helloWorld";

function initSnake(str) {
    let arr = str.split('');
    let newArr = [];
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            newArr.push(arr[i].toLowerCase())
        }
        else 
            newArr.push(arr[i]);
    }
    return newArr.join('');
}


console.log(initSnake(str9));

//================================================================================================================================================
//Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.

let str10 = 'HelloWorld';

let repeatStr = (str, n) => str.repeat(n);

console.log(repeatStr(str10, 4));


function repeatStr1 (str, n) {
    let newStr = '';
    for (let i = 0; i < n; i++) {
        newStr += str
    }
    return newStr;
}

console.log(repeatStr1(str10, 3));

//================================================================================================================================================
//Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.


let pathname = "/home/user/dir/file.txt";

function path(pathname) { 
    arr = pathname.split('').reverse();
    let newArr = [];
    for (item of arr) {
        if (item === '/') {
            break;
        }
        newArr.push(item);
    }
    return newArr.reverse().join('');
};

console.log(path(pathname));

//================================================================================================================================================
//Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.


// let str = "Каждый охотник желает знать"; 
// let str1 = "скрипт";
// let str2 = "знать";

// String.prototype.endsWith = function(substring) {

// };

//================================================================================================================================================
//Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.


let str11 = 'Астрономия — Наука о небесных телах';

function getSubstr(str, char, pos) {
    let indexStr = str.indexOf(char);
    let result = '';
    if (pos === 'до') {
        return result = str.slice(0, indexStr);
    } else if (pos === 'после') {
        return result = str.slice(indexStr)
    }


}
console.log(getSubstr(str11, 'Наука', 'после'));

//================================================================================================================================================
//Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

function insert(str, substr, pos=0) {
    let arr = str.split(' ');
    arr.splice(pos, 0, substr);
    return arr.join(' ');
};

console.log(insert(str11, 'во вселенной', 8));

//================================================================================================================================================
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

function limitStr(str, n, symb) {
    let newStr = str.slice(0, n);
    if (!symb) {
        newStr += '...';
    } else
        newStr += symb;

    return newStr;
};

console.log(limitStr(str11, 5, '$'));

//================================================================================================================================================
//Поделить строку на фрагменты

function cutString(str, n) {

};

//================================================================================================================================================
//Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.


let symb = "о";
let str12 = "Астрономия это наука о небесных объектах";

function count(str, symb) {
    let arr = str.split('');
    let count = 0;
    for (item of arr) {
        if (item === 'о') {
            count++
        }
    }
    return `Кол-во ${symb} в строке: ${str} равняется - ${count}`;
};

console.log(count(str12, symb));

//================================================================================================================================================
//Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

var str13 = "    Max is a good      boy     "; 

function strip(str) {
    return str.replace(/\s+/g, ' ').trim();
};

function strip1() {

}

console.log(strip(str13));



//================================================================================================================================================
//Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.


let str14 = "Сила тяжести приложена к центру масс тела"; 

function cutString(str, n) {
    return str.split(' ').splice(0, n).join(' ').replace(/\s+/g, ' ').trim();
};

console.log(cutString(str14, 5));



//================================================================================================================================================
//Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её символы в алфавитном порядке.

let str15 = "Сила тяжести приложена к центру масс тела"; 


function alphabetize(str) {
    return str.toLowerCase().split('').sort().join('').replace(/\s+/g, ' ').trim();
};

console.log(alphabetize(str14));


//================================================================================================================================================
//Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

var str16 = 'abc def ghi jkl mno pqr stu';

let findWord = (word, str) => str.includes(word);

console.log(findWord('gho', str16));

//================================================================================================================================================
//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
let str17 = 'Каждый охотник желает знать';

let stringToarray = (str) => str.split(' ');
    
console.log(stringToarray(str17));

//================================================================================================================================================
//Создать объект с начальным полем title. Добавить поле с ключом description начальным значением строкой. Добавить метод addField, который при вызове добавляет новое поле в объект с переданным именем и значением addField(fieldName, value), добавить метод editField(fieldName, value), который меняет указанное свойство объекта. Добавить метод удаление свойства deleteField(fieldName), удаляющий указанное поле. Добавить и изменить поля с помощью этих методов.

// let obj = {
//     title: ,

// }


//================================================================================================================================================
//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.



function getDigitsSum (n) {
    let arr = n.toString().split('');
    let res = 0;
    for (item of arr) {
        res += +item;
    }
    return res;
}


console.log(getDigitsSum(551));

//================================================================================================================================================
//Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

function sumThirteen () {
    let arr = [];
    for (let i = 1; i < 2020; i++) {
        if (getDigitsSum(i) === 13) {
            arr.push(i);
        } 
    }
    return arr.toString();
}

console.log(sumThirteen());


//================================================================================================================================================
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

console.log(singleDigit(551))
