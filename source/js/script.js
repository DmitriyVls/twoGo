/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.burger__link-button');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger__active');
  menu.classList.toggle('menu__hidden');
});
