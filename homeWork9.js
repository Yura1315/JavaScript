//Реализовать объект пользователя с полями name, lastname ,middleName, birthDate. Реализовать геттер/сеттер fullname, который возвращает одной строкой полное имя пользователя и записывает имя, фамилию и отчество при присвоении значения. Реализовать геттер age, который возвращает возраст используя данные даты рождения.

// const user = {
//     name: 'Yuriy',
//     lastName: 'Chekhov',
//     midleName: 'Igorevich',
//     birthDate: '20.03.1994',

//     get fullName () {
//         return `${this.lastName} ${this.name} ${this.midleName}`;
//     },
//     get userAge () {
//         let birth = new Date(this.birthDate.split('.').reverse().join(', '));
//         let nowDate = new Date();
//         let age = nowDate.getFullYear() - birth.getFullYear();
//         return age;
//     }
// };

// console.log(user.fullName);
// console.log(user.userAge);


//С помощью замыкания реализовать реализуйте генератор случайных чисел в указанном промежутке (min и max). Важное условие: при генерировании чисел они не должны повторяться.

// const min = 3;
// const max = 15;

// function generatorNum (min) {

//     return function (max) {
//         return Math.floor(min + Math.random() * (max + 1 - min)); //сначала 
//     }
// }

// const best = generatorNum(10);

// console.log(generatorNum(min)(max));
// console.log(best(15));

//3. Что выведет функция? 

// function f() {
//     console.log(this); // global
// }

// let user = {
//     g: f.bind(null),
// };

// // user.g();
// const b = user.g.bind(user);
// console.log(b);

// console.log(user.g());

//мне кажется что так как null является определённым значением отсутствия объекта, мы привязываем функцию к отсутствующему объекту



//4. Можем ли мы изменить this дополнительным связыванием?

// function f() {
//     console.log(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();


//5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.В текущей реализации Сообщение не соответствует тому, что мы ожидаем увидеть(“Имя пользователя  logged in” или “Имя пользователя failed to log in”) Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'Вася',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


//6 .Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value

// let elem = {value: 'Привет'}

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }


// const boundFunc = func.bind(elem);

// boundFunc('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// boundFunc('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'


//7. Есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа. Выполните каррирование. Т.е. напишите вспомогательную функцию currySum, в которую вы передадите функцию sum, и которую можно будет вызвать слуедующим образом -  currySum(a)(b)(c).


// const sum = (a, b, c) => a + b + c;

// function currySum (a) {
//     return function (b) {
//         return function (c) {
//             return sum(a, b, c);
//         }
//     }
// }

// console.log(currySum(2)(2)(2));


//8. Напишите функцию создания задачи(createTask), принимающая название задачи, которая возвращает функцию смены статуса задачи. При вызове функции смены статуса возвращается строка с названием задачи и текущим статусом. Список статусов: “Не назначена”, “В работе”, “Тестирование”, “Завершена’. Статус Завершена - присваивается только после передачи флага true и только после тестирования.  Статус Не назначена - только при первом вызове.


// function createTask (currTask) {

//     return function () {
//         return `${currTask} - не назначена`
//     }

// }



// function createTask(taskName) {
//     let status = '';
//     let flag = false;
//     return function (flag) {
//         if (flag === true) {
//             status = 'Завершена'
//             return `${taskName} - Завершена`;
//         } else
//         switch (status) {
//             case '':
//                 status = 'не назначена';
//                 return `${taskName} - не назначена`;
//             case 'не назначена':
//                 status = 'В работе';
//                 return `${taskName} - В работе`;
//             case 'В работе':
//                 status = 'Тестирование';
//                 return `${taskName} - Тестирование`;
//             case 'Тестирование':
//                 status = 'В работе';
//                 return `${taskName} - В работе`;
//             case 'Завершена':
//                 return `${taskName} - Завершена`;
//         }
//     }
// }

// const task = createTask('Название задачи');
// console.log(task()) // => ‘Название задачи - не назначена’
// console.log(task()) // => ‘Название задачи - В работе’
// console.log(task()) // => ‘Название задачи - Тестирование’
// console.log(task()) // => ‘Название задачи - В работе’
// console.log(task()) // => ‘Название задачи - Тестирование’
// console.log(task()) // => ‘Название задачи - В работе’
// console.log(task()) // => ‘Название задачи - Тестирование’
// console.log(task(true)) // => ‘Название задачи - Завершена’
// console.log(task()) // => ‘Название задачи - Завершена’



