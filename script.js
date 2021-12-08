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
user_button.addEventListener('click', function(e) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
}); 

document.addEventListener('click', function(e) {
    if (!e.target.closest(".user-header")) {
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active');
    }
});
// ------------------SLIDER------------------

let sliders = document.querySelectorAll('_swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data(''lightGallery).destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let main_slider = new Swiper('.main-slider__body', {

    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    //autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    //preloadImages: false,
    //lazy: true,

    //arrows
    navigation: {
        nextE1: 'about__more .more__item_next',
        prevE1: 'about__more .more__item_prev'
    }

})