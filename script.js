// ---------------BURGER---------------

let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
};
// ------------------HEADER------------------

let user_button = document.querySelector('.user-header__button');
let user_menu = document.querySelector('.user-header__menu');

user_button.addEventListener('click', function(e) {
    user_menu.classList.toggle('_active');
}); 

document.addEventListener('click', function(e) {
    if (!e.target.closest(".user-header")) {
        user_menu.classList.remove('_active');
    }
});
// ------------------SLIDER------------------

new Swiper('.main-slider__body', {
    navigation: {
        nextEl: '.control-main-slider__arrow_next',
        prevEl: '.control-main-slider__arrow_prev'
    },

    simulateTouch: false,

    autoHeight: true,

    loop: true,

    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },

    speed: 800,

    slidesPerView: 1,

    observer: true,
    observeParents: true,

    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
});

new Swiper('.slider-lots__body', {
    navigation: {
        nextEl: '.control-slider-lots__arrow_next',
        prevEl: '.control-slider-lots__arrow_prev'
    },

    simulateTouch: false,

    autoHeight: true,

    loop: true,

    // autoplay: {
    //     delay: 5000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false
    // },

    speed: 800,

    slidesPerView: 3,

    observer: true,
    observeParents: true,

    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    },
});

new Swiper('.slider-quotes__body', {
    navigation: {
        nextEl: '.control-slider-quotes__circle',
        prevEl: ''
    },

    simulateTouch: false,

    autoHeight: true,

    loop: true,

    autoplay: {
        delay: 8000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },

    speed: 800,

    slidesPerView: 1,

    observer: true,
    observeParents: true,

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //     },
    //     550: {
    //         slidesPerView: 2,
    //     },
    //     768: {
    //         slidesPerView: 3,
    //     }
    // },
});
