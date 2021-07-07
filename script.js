//menu
const menuList = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu-link');
const nav = document.querySelector('nav');
const firstCard = document.querySelector('.card');
const projects = document.querySelector('#projects');


//carousel
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.toggle('show');
    })
})

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
    menuBtn.classList.toggle('show');
})

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({top: 0, left: -carousel.offsetWidth, behavior: 'smooth'});
})

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({top: 0, left: carousel.offsetWidth, behavior: 'smooth'});
})

window.addEventListener('scroll',() => {
    let yPosition = window.pageYOffset;
    yPosition >= 85 ? nav.classList.add('hide') : nav.classList.remove('hide');
    menuList.classList.remove('show');
    menuBtn.classList.remove('show');
})

window.addEventListener('load', carouselBtnsDisplay)
window.addEventListener('resize', carouselBtnsDisplay)

function carouselBtnsDisplay(){
    if(firstCard.offsetWidth*3 <= projects.offsetWidth){
        nextBtn.style.visibility = 'hidden';
        prevBtn.style.visibility = 'hidden';
    } else {
        nextBtn.style.visibility = 'visible';
        prevBtn.style.visibility = 'visible';
    }
}