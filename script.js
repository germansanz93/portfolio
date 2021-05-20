//intro
const box = document.querySelector('.box');
const gLetter = document.querySelector('.g-letter');
const sLetter = document.querySelector('.s-letter');
const container = document.querySelector('.container');


gLetter.addEventListener('animationend', () => {
    box.style.opacity = 0;
    box.addEventListener('transitionend', () => {
        container.style.opacity = 1;
        document.body.style.backgroundColor = 'var(--background-blue)';
        main.style.opacity = 1;
        document.body.removeChild(box);
    });
})



//content
const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');
const main = document.querySelector('main')
const menuItems = document.querySelectorAll('.menu-link');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
    menuList.classList.contains('show') ? menuIcon.innerText = 'menu_open' : menuIcon.innerText = 'menu';
})

let index = 0;
menuItems.forEach((link) => {
    link.before(`0${++index}. `);
})