//Напишите функцию, которая возвращает новый объект без указанных значений

const user = {
	name: 'Дмитрий',
	city: 'Нижний Новгород',
};

const without = (obj, ...field) => {
    let newObj = {};
    for (let i = 0; i < field.length; i++) {
        for (key in obj) {
            newObj[key] = obj[key];
            if (field[i] === key) {
                delete newObj[key];
            }
        }
    }
    return newObj;
}

console.log(without(user, 'name'));


//Написать функцию, которая проверяет наличие поля в объекте.


const checkField= (obj, field) => {
    for (let key in obj) {
        if (key === field) {
            return true;
        }
            return false;
    }
}

console.log(checkField(user, 'age'));


