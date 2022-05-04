let headernav = document.querySelector(".header__nav");
let burger = document.querySelector(".burger");
let imgLeft = document.querySelector(".content__main-img__left");
let imgRight = document.querySelector(".content__main-img__right");

burger.addEventListener("click", clickburger);

function clickburger() {
    headernav.classList.toggle("show");
    burger.classList.toggle("active");
}



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




// let progValue = document.querySelector(".span").innerHTML;
// let widthVal = document.querySelector('.progressbar__value');

// function progress() {

//     if (progValue > 10 && progValue <= 100) {
//         document.querySelector(".span").innerHTML = progValue + ' ' + '%';
//         document.querySelector('.progressbar__value').style.width = progValue + '%'
//         document.querySelector(".span").style.display = "block";
//     } else {
//         if (progValue <= 10) {
//             document.querySelector('.progressbar__value').style.width = progValue + '%'
//         } else if (progValue > 100) {
//             document.querySelector('.progressbar__value').style.width = '100%'
//             document.querySelector(".span").innerHTML = '100' + ' ' + '%'
//             document.querySelector(".span").style.display = "block";
//         }
//     }


// }

// progress()