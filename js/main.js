const burger = document.querySelector('.menu-btn'),
    menu = document.querySelector('.header__menu'),
    list = document.querySelector('.header__list'),
    body = document.getElementsByTagName('body')[0];


burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('menu-btn_active');
    list.classList.toggle('active');
    body.classList.toggle('luck');
})