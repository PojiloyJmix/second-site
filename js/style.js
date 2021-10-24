// menu
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};
if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}

// меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function (a) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

new Swiper('.swiper', {
   pagination: {
      el: '.swiper-pagination',
      draggable: true,
   },
   mousewheel: {
      eventsTarget: ".image-slider"
   },
   direction: 'horizontal',
   autoHeight: false,
   slidesPerView: 7,
   watchOverflow: true,
   sensitivity: 1.3,
   spaceBetween: 20,
   speed: 500,
   slidesPerGroup: 1,
   centeredSlides: false,
   scrollbar: {
      el: '.swiper-scrollbar',
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 3,
         loop: true,
      },
      992: {
         slidesPerView: 5,
      },
      1065: {
         slidesPerView: 7,
      }
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});
