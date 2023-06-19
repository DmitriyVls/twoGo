/* в этот файл добавляет скрипты*/
//Переменые для мобильного меню
const burger = document.querySelector('.burger');
const burgerButton = document.querySelector('.burger__link-button');
const menu = document.querySelector('.menu');
// Переменные для слайдера
const prev = document.getElementById('left');
const next = document.getElementById('right');
const slides = document.querySelectorAll('.slider__page');
const dots = document.querySelectorAll('.slider__dot');
let index = 0;

const mobileMenu = () => {
  //Удаляем классы, если JS подключен
  menu.classList.remove('menu--no-js');
  burger.classList.remove('burger--no-js');
  Event.preventDefault;
  //Меню Бургер
  burger.addEventListener('click', function () {
    burgerButton.classList.toggle('burger__active');
    menu.classList.toggle('menu__hidden');
  });
};

mobileMenu();

//MAP
const mapOptions = {
  center: [59.96819, 30.31713],
  zoom: 17
}

const map = new L.map('map', mapOptions);
const layer = new L.TileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=StFld3NCrvag1TMtL9m1');

map.addLayer(layer);

const iconOptions = {
  iconUrl: '/img/map.svg',
  iconSize: [38, 50],
  iconAnchor: [18, 50]
}

const customIcon = L.icon(iconOptions);

var markerOptions = {
  clickable: true,
  draggable: true,
  icon: customIcon
}

const marker = L.marker({ lat: 59.96819, lng: 30.31713 }, markerOptions);

marker.addTo(map);
//MAP

//SLIDER
const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('slider__page--active');
  }
  slides[n].classList.add('slider__page--active');
}

const activeDot = n => {
  for (dot of dots) {
    dot.classList.remove('slider__dot--current');
  }
  dots[n].classList.add('slider__dot--current');
}

const prepearCurrentSlide = ind => {
  activeSlide(index);
  activeDot(index);
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepearCurrentSlide(index);

  } else {
    index++;
    prepearCurrentSlide(index);
  }
}

const prevSlide = () => {

  if (index == 0) {
    index = slides.length - 1;
    prepearCurrentSlide(index);

  } else {
    index--;
    prepearCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepearCurrentSlide(index);

  })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
//SLIDER
