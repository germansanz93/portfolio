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
    carousel.scrollLeft > visualViewport.width/40 ? 
        carousel.scrollBy({top: 0, left: -visualViewport.width, behavior: 'smooth'}) :
        carousel.scrollLeft = visualViewport.width/40;
})

nextBtn.addEventListener('click', () => {
    carousel.scrollLeft < 2 * visualViewport.width*(39/40) ? 
        carousel.scrollBy({top: 0, left: visualViewport.width, behavior: 'smooth'}) :
        carousel.scrollLeft = 2 * visualViewport.width*(39/40);
})
