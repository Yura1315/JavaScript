const container = document.createElement('div');
container.className = 'container';
const header = document.createElement('header');
header.className = 'header';
document.body.prepend(header);
header.append(container);
const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Список моих дел';
const wrapp = document.createElement('div');
wrapp.className = 'wrap';
container.append(wrapp);
wrapp.append(title);
const form = document.createElement('form');
form.className = 'form';
wrapp.append(form);
form.innerHTML = `<input class='input' type='text'/ placeholder='Название...'> <button class='btn' type='button'>Добавить </button>`;
const works = document.createElement('div');
works.className = 'works';
header.after(works);
const ul = document.createElement('ul');
ul.className = 'workList';
works.append(ul);


const btn = document.querySelector('button');



btn.addEventListener('click', function () {
    let input = document.querySelector('input');
    if (!input.value) {
        let miss = document.createElement('p');
        miss.className = 'error';
        miss.textContent = 'Введите текст в поле ввода';
        form.append(miss)
        setTimeout(() => {
            miss.remove();
        }, 2000);
    } else {
        let work = input.value;
        let li = document.createElement('li');
        li.className = 'workLink';
        li.textContent = work;
        ul.prepend(li);
        input.value = '';
        ul.style.opacity = '1';
        let spanCross = document.createElement('span');
        spanCross.className = 'cross';
        li.append(spanCross);
    }
});

ul.addEventListener('click', function(e) {
    e.target.classList.toggle('complete');
    // let spanComplete = document.createElement('span');
    // spanComplete.className = 'gal';
});

