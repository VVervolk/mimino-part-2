//   if (heroSlider) {
//     heroSlider.forEach(slider => {
//       //
//       let arrowLeft = slider.querySelector('.swiper-button-prev');
//       let arrowRight = slider.querySelector('.swiper-button-next');
//       //

//       // let pagination = slider.querySelector('.swiper-pagination');
//       swiper = new Swiper(slider.querySelector('.swiper'), {
//         speed: 2000,
//         loop: true,
//         centeredSlides: true,
//         autoplay: {
//           delay: 3000,
//           disableOnInteraction: false,
//         },

//         slidesPerView: 1,
//         spaceBetween: 0,
//         // pagination: {
//         //     el: pagination,
//         //     clickable: true,
//         //     renderBullet: function (index, className) {
//         //         return '<li class="' + className + '"></li>';
//         //     },
//         // },
//         //
//         navigation: {
//           nextEl: arrowRight,
//           prevEl: arrowLeft,
//         },
//         //
//         on: {
//           transitionStart: function () {
//             let previousIndex = this.previousIndex;
//             let previousSlide =
//               slider.getElementsByClassName('swiper-slide')[previousIndex];
//             if (previousSlide) {
//               setTimeout(function () {
//                 previousSlide.classList.remove('is-play');
//               }, 1000);
//             }
//           },
//           transitionEnd: function () {
//             let activeIndex = this.activeIndex;
//             let activeSlide =
//               slider.getElementsByClassName('swiper-slide')[activeIndex];
//             activeSlide.classList.add('is-play');
//           },
//         },
//         // breakpoints: {
//         //   // when window width is >= 0px
//         //   0: {
//         //     slidesPerView: "auto",
//         //     // centeredSlides: true,
//         //     spaceBetween: 25,
//         //   },
//         //   // when window width is >= 1280px
//         //   1028: {
//         //     slidesPerView: 2,
//         //     spaceBetween: 40,
//         //     centeredSlides: false,
//         //   },
//         //   // when window width is >= 640px
//         //   // 1280: {
//         //   //   slidesPerView: 3,
//         //   //   spaceBetween: 40,
//         //   // },
//         // },
//       });
//     });
//   }
// }
// window.addEventListener('load', swiperSlider, false);

function swiperSlider() {
  const sliderTwoCards = document.querySelectorAll('.slider');
  const sliderTwoCardsReverse = document.querySelectorAll('.js-slider-reverse');
  const sliderThreeCards = document.querySelectorAll('.slider-details');
  const sliderThreeCardsReverse = document.querySelectorAll(
    '.slider-details-reverse'
  );
  //const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
  if (sliderTwoCards) {
    sliderTwoCards.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        slidesOffsetBefore: 0,
        centeredSlides: false,
        centeredSlidesBounds: true,

        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        on: {
          init: function () {
            console.log('swiper initialized');
          },
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.315,
            spaceBetween: 25,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }
  if (sliderTwoCardsReverse) {
    sliderTwoCardsReverse.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,

        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        on: {
          init: function () {
            console.log('swiper initialized');
          },
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.315,
            spaceBetween: 25,
            slidesOffsetBefore: 85,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesOffsetBefore: 0,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }
  if (sliderThreeCards) {
    sliderThreeCards.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        slidesOffsetBefore: 0,
        centeredSlides: false,
        centeredSlidesBounds: true,
        speed: 1500,
        loop: true,

        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.315,
            spaceBetween: 25,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2.7,
            spaceBetween: 87,
          },
        },
      });
    });
  }
  if (sliderThreeCardsReverse) {
    sliderThreeCardsReverse.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        slidesOffsetBefore: 0,
        centeredSlides: false,
        centeredSlidesBounds: true,
        speed: 1500,
        loop: true,

        // кнопки навігації
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.315,
            spaceBetween: 25,
            slidesOffsetBefore: 95,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 2.3,
            spaceBetween: 30,
            slidesOffsetBefore: 0,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2.7,
            spaceBetween: 87,
          },
        },
      });
    });
  }

  // if (heroSlider) {
  //     heroSlider.forEach(slider => {
  //         //
  //         let arrowLeft = slider.querySelector('.swiper-button-prev');
  //         let arrowRight = slider.querySelector('.swiper-button-next');
  //         //

  //         let pagination = slider.querySelector('.swiper-pagination');
  //         swiper = new Swiper(slider.querySelector('.swiper'), {
  //             speed: 1500,
  //             //centeredSlides: true,
  //             // autoplay: {
  //             //     delay: 3000,
  //             //     disableOnInteraction: false,
  //             // },
  //             slidesPerView: 1,
  //             spaceBetween: 20,
  //             pagination: {
  //                 el: pagination,
  //                 clickable: true,
  //                 renderBullet: function (index, className) {
  //                     return '<li class="' + className + '"></li>';
  //                 },
  //             },
  //             //
  //             navigation: {
  //                 nextEl: arrowRight,
  //                 prevEl: arrowLeft,
  //             },
  //             //
  //             on: {
  //                 transitionStart: function () {
  //                     let previousIndex = this.previousIndex;
  //                     let previousSlide = slider.getElementsByClassName('swiper-slide')[previousIndex];
  //                     if (previousSlide) {
  //                         setTimeout(function () {
  //                             previousSlide.classList.remove('is-play');
  //                         }, 1000);
  //                     }
  //                 },
  //                 transitionEnd: function () {
  //                     let activeIndex = this.activeIndex;
  //                     let activeSlide = slider.getElementsByClassName('swiper-slide')[activeIndex];
  //                     activeSlide.classList.add('is-play');
  //                 },
  //             },
  //             breakpoints: {
  //                 // when window width is >= 320px
  //                 320: {
  //                     slidesPerView: 1,
  //                     spaceBetween: 20,
  //                 },
  //                 // when window width is >= 480px
  //                 768: {
  //                     slidesPerView: 2,
  //                     spaceBetween: 30
  //                 },
  //                 // when window width is >= 640px
  //                 1200: {
  //                     slidesPerView: 3,
  //                     spaceBetween: 40
  //                 }
  //             }

  //         });
  //     });
  // }
}
window.addEventListener('load', swiperSlider, false);
