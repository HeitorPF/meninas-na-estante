new Swiper('.card-wrapper', {
  loop: false,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 2
    },
    930: {
      slidesPerView: 3
    },
    1300: {
      slidesPerView: 4
    },
    1500: {
      slidesPerView: 5
    }
  }
});