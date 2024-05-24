
// - SEARCH - //

let searchButton = document.querySelector(".search-open")
let closeButton = document.querySelector(".search-close")
let nav = document.querySelector(".header__nav")

searchButton.addEventListener("click",()=>{
  nav.classList.add("search-visible")
})

closeButton.addEventListener("click",()=>{
  nav.classList.remove("search-visible")
})


// - END OF SEARCH - //

// - SLIDER -


const swiper = new Swiper('.hero__swiper', {
slidesPerView: 1,
loop: true,
// пагинация
pagination: {
el: '.swiper-bullet-pagination',
clickable: true
},
// навигация
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});

// - END OF SLIDER -

// - BURGER -

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav__content__row');
let menuLiinks = menu.querySelectorAll('.header__nav__content__link');

burger.addEventListener('click',

function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav__content__row--active');

    document.body.classList.toggle('stop-scroll');
    })

menuLiinks.forEach(function(el) {
    el.addEventListener('click', function() {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav__content__row--active')

        document.body.classList.remove('stop-scroll')

    });

});


// - END OF BURGER -


// TABS


let tabsBtn = document.querySelectorAll('.hdww__steps__link_mod');
let tabsItem = document.querySelectorAll('.hdww__container');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('hdww__steps__link_mod--active')});
      e.currentTarget.classList.add('hdww__steps__link_mod--active');

    tabsItem.forEach(function(element){ element.classList.remove('hdww__container--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('hdww__container--active');
  });
});


// END OF TABS




