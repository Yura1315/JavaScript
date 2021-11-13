

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

function equals (a, b) {
    return (a === b)? true : false;
}

console.log(equals(2, 3));

let num = 3;
function dayWeek (num) {
    switch(num) {
        case 1:
            console.log ('Понедельник');
            break;
        case 2:
            console.log ('Вторник');
            break;
        case 3:
            console.log ('Среда');
            break;
        case 4:
            console.log ('Четверг');
            break;
        case 5:
            console.log ('Пятница');
            break; 
        case 6:
            console.log ('Суббота');
            break;   
        case 7:
            console.log ('Воскресенье');
             break;
        default:
            console.log('Неврное значение');
    }
}

dayWeek(num);

let n = 20;


function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        console.log(i);
      let c = a + b;
      a = b;
      b = c;
      console.log(`i ${i}, a ${a}, b ${b}, c ${c}`);
    }
    return b;
  }

  fib(n);