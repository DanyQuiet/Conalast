let headernav = document.querySelector(".header__nav");
let burger = document.querySelector(".burger");
let imgLeft = document.querySelector(".content__main-img__left");
let imgRight = document.querySelector(".content__main-img__right");

burger.addEventListener("click", clickburger);
function clickburger() {
  headernav.classList.toggle("show");
  burger.classList.toggle("active");
}

// document.ready(function name() {
//   imgLeft.animate(
//     [
//       // keyframes
//       { transform: "translate3D(0, 0, 0)" },
//       { transform: "translate3D(-20px, -50px, -10px)" },
//       { transform: "translate3D(-20px, -20px, 0)" },
//       { transform: "translate3D(0, 0, 0)" },
//     ],
//     {
//       // timing options
//       duration: 15000,
//       iterations: Infinity,
//     }
//   );

//   // imgRight.animate(
//   //   [
//   //     // keyframes
//   //     { transform: "translate3D(0, 0, 0)" },
//   //     { transform: "translate3D(25px, 30px, 5px)" },
//   //     { transform: "translate3D(20px, 25px, 0)" },
//   //     { transform: "translate3D(0, 0, 0)" },
//   //   ],
//   //   {

//   //     duration: 15000,
//   //     iterations: Infinity,
//   //   }
//   // );
//   console.log("da");
// });

// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  observerParents: true,
  spaceBetween: 30,

  slidesPerView: 4,
  loopedSlides: 4,
  slidesPerGroup: 1,
  // calculateHeight: true,
  autoHeight: true,
  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    992: {
      slidesPerView: 4,
    },

    860: {
      slidesPerView: 3,
    },

    500: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
