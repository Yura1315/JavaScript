//1. Что будет выведено в консоль? Ответить не запуская код

// function foo() {
//     console.log(this);
// }
// foo()
//object global

// 2. Что будет выведено в консоль? Ответить не запуская код

// const obj = {
//     name: 'Дмитрий',
//     getName() {
//     console.log(this.name);
//    },
//    };
//    obj.getName();
   
// Вызывается от объект, выведется Дмитрий

//3. Что будет выведено в консоль? Ответить не запуская код

// const obj = {
//     name: 'Дмитрий',
//     getName() {
//       function bar() {
//         console.log(this.name);
//       }
//       bar();
//     },
//    };
//    obj.getName();

//4. Что будет выведено в консоль? Ответить не запуская код

// const obj = {
//     name: 'Дмитрий',
//     getName: () => {
//       function bar() {
//         console.log(this.name);
//       }
//       bar();
//     },
//    };
//    obj.getName();
   

//5. Что будет выведено в консоль? Ответить не запуская код

// const obj = {
//     name: 'Дмитрий',
//     getName() {
//       const bar = () => {
//         console.log(this.name);
//       }
//       bar();
//     },
//    };
//    obj.getName();

// Выведет Дмитрий, потому, что стрелочная функция внутри обычной

// 6. Что будет выведено в консоль? Ответить не запуская код

// const obj = {
//     name: 'Дмитрий',
//     getName() {
//       console.log(this.name);
//     },
//    };
    
//    const obj2 = {
//     getName: obj.getName,
//    };
    
//    obj2.getName();
//у объекта 2 нету нэйм поэтому ундеф

// 7. Что будет выведено в консоль? Ответить не запуская код

// const getName = () => {
//     console.log(this.name);
//    };

   
//    const obj = {
//     name: 'Дмитрий',
//     getName,
//    };

//    const obj2 = {
//     getName,
//    };
//    obj.getName();
//    obj2.getName();
//Загвоздка в стрелочной функции, если поменять на обычную в первой выведет имя, но во второй нет ундеф

// 8. Что будет выведено в консоль? Ответить не запуская код

// const obj = {
//     name: 'Дмитрий',
//     friend: {
//     name: 'Владимир',
//     getName() {
//         function innerGetName() {
//             console.log(this.name);
//         }
//         innerGetName();
//     },
//     },
// };
    
// obj.friend.getName();

//9. Что будет выведено в консоль? Ответить не запуская код

// const obj = {
//     name: 'Дмитрий',
//     friend: {
//       name: 'Владимир',
//       getName() {
//         return function() {
//           console.log(this.name);
//         }
//       },
//     },
//    };
//     obj.friend.getName() ();
   
 
//10. Что будет выведено в консоль? Ответить не запуская код

// const obj = {
//     name: 'Дмитрий',
//     friend: {
//       name: 'Владимир',
//       getName() {
//         return () =>  {
//           console.log(this.name);
//         }
//       },
//     },
//    };
//    obj.friend.getName() ();

//11. Что будет выведено в консоль? Ответить не запуская код

// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//       console.log(this.message);
//     }
// };
// setTimeout(object.logMessage, 1000);
// object.logMessage();

//12. Воспользуйтесь функцией logMessage таким образом, чтобы в консоли увидеть сообщение "Hello, World!"

// const object = {
//     message: 'Hello, World!'
//    };
//    function logMessage() {
//     console.log(this.message); // "Hello, World!"
//    }

// object.logMessage = logMessage;
// object.logMessage();

//13. Что будет выведено в консоль? Ответить не запуская код

// var length = 4;
// function callback() {
//     console.log(this.length); // What is logged?
// }
// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     }
// };
// object.method(callback, 1, 2);

// 14. Реализовать объект калькулятора calculator с 3 методами. Первый метод setValues(a, b) присваивает значения свойствам a и b.Второй sum()(обратите внимание, что он не принимает аргументы)  возвращает сумму свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены. Третий метод mult() возвращает произведение свойств a и b текущего объекта или сообщение об ошибке, если значения свойств не присвоены.

// const callc = {
//     setValues: function (a, b) {
//         if (!isNaN(a) && !isNaN(b)) {
//             this.a = a;
//             this.b = b;
//         } else {
//             console.log('error typeof');
//         }
//     },
//     sum: function () {
//         return (this.a && this.b)? this.a + this.b : 'not values'
//     },
//     mult: function () {
//         return (this.a && this.b)? this.a * this.b : 'not values'
//     }
// }

// callc.setValues(3, 5);
// console.log(callc.sum());
// console.log(callc.mult());

// 15. Создать объект calculator2 с 3 методами. 1 метод - setVales(a, b) - создать используя метод из предыдущего задания(можно скопировать по ссылке метод из объекта calculator либо создать функцию setValues, как мы делали на лекции и присвоить обоим объектам). 2 метод - div() - возвращает результат деления a на b. 3 метод - diff() - возвращает разность чисел a и b.

// const callc2 = {
//     setValues: callc.setValues,
//     div: function () {
//         return this.a / this.b;
//     },
//     diff: function () {
//         return this.a - this.b;
//     }, 
// }

// callc2.setValues(10, 26);
// console.log(callc2.div());
// console.log(callc2.diff());


//16. Создать объект пользователя  user1 со свойствам name, age, city, favoriteColor и методами setName, setAge, setCity, setFavoriteColor, которые меняют значения соответствующих свойств. Создать объект второго юзера user2 из существующего объекта user1. Изменить значения всех свойств второго юзера с помощью методов setName, setAge, setCity, setFavoriteColor. Вывести в консоль оба объекта и убедиться, что значения свойств разные.

// const user = {
//     name: 'Yura',
//     age: 27,
//     city: 'NN',
//     favoriteColor: 'Green',
//     setAge: function (n) {
//         this.age = n;
//     },
//     setCity: function (str) {
//         this.city = str;
//     },
//     setFavoriteColor: function (color) {
//         this.favoriteColor = color;
//     },
// }

// const user2 = {...user};

// console.log(user);
// console.log(user2);

// user2.setAge(35);
// user2.setCity('Moscow');
// user2.setFavoriteColor('black');
// console.log(user2);
// console.log(user);

//17. Реализовать функцию, которая принимает в себя любое количество числовых аргументов и возвращает наименьшее число. (не использовать Math.min).

// function getNumMin (...arg) {
//     const newArr = arg.sort((a, b) => a - b);
//     return newArr[0];

// }

// console.log(getNumMin(1, 3, 6, 7, 11, 4, 5, 8, 9, 10, 15));

//18. Исправьте код таким образом, чтобы вывод логов соответствовал комментариями

// const func = (user) => {
//     const otherUser = {...user};
//     otherUser.name = 'Дмитрий';
//     otherUser.surName = 'Сидоров';
//     return otherUser;
// }


// const firstUser = { 
//     name: 'Василий',
//     surName: 'Иванов'
// }

// console.log(func(firstUser)) // { name: 'Дмитрий', surName: 'Сидоров' }

// console.log(firstUser) // { name: 'Василий', surName: 'Иванов' }

//19. Создайте объекты двух персонажей с именами(name) с числовыми характеристиками уровня(level), силы(strength), ловкости(agility) и интелекта(intellect). 
// Для обоих персонажей создайте метод attack, который рассчитывает и возвращает урон атаки путем сложения силы и ловкости, и метод fireball, который возвращает урон файерболом путем умножения интеллекта на уровень персонажа. Далее создайте метод combo, который возвращает сумму значений, которые возвращают методы  attack и fireball. 
// После формирования объектов персонажей создайте функцию startFight, которая принимает в себя два объекта и сравнивает результаты вызовов их методов combo и возвращает строку “Победил ИМЯ_ПЕРСОНАЖА”.

// class MetaMan {
//     constructor(name, level, strenght, agility, intellect) {
//         this.name = name;
//         this.level = level;
//         this.strenght = strenght;
//         this.agility = agility;
//         this.intellect = intellect;
//     }

//     attack () {
//         return this.sumAttack = this.strenght + this.agility;
//     }

//     fireball () {
//         return this.sumFireball = this.intellect * this.level;
//     }

//     combo () {
//         return this.sumAttack + this.sumFireball;
//     }

// }

// const spiderMan = new MetaMan('Spider-Man', 15, 60, 80, 90);
// const ironMan = new MetaMan('Iron man', 15, 80, 70, 115);

// console.log(spiderMan);
// console.log(spiderMan.attack());
// console.log(spiderMan.fireball());
// console.log(spiderMan.combo());
// console.log(ironMan);
// console.log(ironMan.attack());
// console.log(ironMan.fireball());
// console.log(ironMan.combo());

// function startFight(obj1, obj2) {
//     if (obj1.combo() > obj2.combo()) {
//         return `${obj1.name} vs ${obj2.name}, победитель ${obj1.name}`;
//     } else if (obj1.combo() < obj2.combo()) {
//         return `${obj1.name} vs ${obj2.name}, победитель ${obj2.name}`;
//     } else
//     return `${obj1.name} vs ${obj2.name}, ничья`;
// }

// console.log(startFight(spiderMan, ironMan));









