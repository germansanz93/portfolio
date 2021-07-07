//menu
const menuList = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.toggle('show');
    })
})

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
})

//carousel
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');


prevBtn.addEventListener('click', () => {
    carousel.scrollBy({top: 0, left: -carousel.offsetWidth, behavior: 'smooth'});
})

nextBtn.addEventListener('click', () => {
        carousel.scrollBy({top: 0, left: carousel.offsetWidth, behavior: 'smooth'});
})
