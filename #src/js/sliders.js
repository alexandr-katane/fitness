
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-container')) {
            slider.classList.add('swiper-container');
        }

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
    }
    sliders_build_callback();
}

function sliders_build_callback(params) { }

let imgSlider = new Swiper('.img-slider__body', {
    slidesPerView: 1,
    allowTouchMove: true,
    speed: 800,
    preloadImages: false,
    parallax: true,
    autoHeight: true,
    navigation: {
        nextEl: '.img-slider__arrow_next',
        prevEl: '.img-slider__arrow_prev',
    },
});


let personSlider = new Swiper('.slider-text__body', {
    slidesPerView: 1,
    allowTouchMove: true,
    speed: 800,
    preloadImages: false,
    parallax: true,
    autoHeight: true,
});

let socialSlider = new Swiper('.socials-trainer__body', {
    slidesPerView: 1,
    allowTouchMove: true,
    speed: 800,
    preloadImages: false,
    parallax: true,
    autoHeight: true,

});



let sl = [imgSlider, personSlider, socialSlider];

for (let i = 0; i < sl.length; i++) {
    sl[i].on('slideChange', function () {
        let a = sl.filter(n => n !== sl[i]);
        a.forEach(n => n.slideToLoop(sl[i].realIndex));
    })

}
