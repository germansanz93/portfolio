const menuList = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
})