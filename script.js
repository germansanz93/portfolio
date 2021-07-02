//menu
const menuList = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
})

//carousel
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');


prevBtn.addEventListener('click', () => {
    if(carousel.scrollLeft > window.innerWidth) 
        carousel.scrollBy({top: 0, left: -window.innerWidth, behavior: 'smooth'});
})

nextBtn.addEventListener('click', () => {
    if(carousel.scrollLeft < 2 * window.innerWidth)
        carousel.scrollBy({top: 0, left: window.innerWidth, behavior: 'smooth'});
})
