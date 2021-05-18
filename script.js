const box = document.querySelector('.box');
const gLetter = document.querySelector('.g-letter');
const sLetter = document.querySelector('.s-letter');
const main = document.querySelector('.container');

gLetter.addEventListener('animationend', () => {
    box.style.opacity = 0;
    box.addEventListener('transitionend', () => {
        main.style.opacity = 1;
        document.body.style.backgroundColor = 'var(--background-blue)'
    });
})