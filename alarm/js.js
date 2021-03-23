new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true,
      },
      loop:true,
      breakpoints: {
       100:{
       slidesPerView:1,
       spaceBetween: 0, 
       },
        320: {
          slidesPerView: 'auto',
          spaceBetween: 20,
        },
        720:{
          slidesPerView: 'auto',
          spaceBetween: 30,
        },
 
      }
});
let menuOpener = document.querySelector(".menuOpener"),
    burger = document.querySelector(".menu"),
    menuCloser = document.querySelector('.menuCloser');

menuOpener.addEventListener('click', function(){
        burger.classList.toggle('menuClose');
        menuOpener.style.opacity = '0';
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '16px';
    });

    menuCloser.addEventListener('click', function(){
        burger.classList.toggle('menuClose');
        menuOpener.style.display = '';
        document.body.style.overflow = '';
        menuOpener.style.opacity = '1'
        document.body.style.paddingRight = '0px';
    })