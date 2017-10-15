/**
 * Created by AI on 14.10.2017.
 */

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 300,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    autoplayDisableOnInteraction: false,
    // // Navigation arrows
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',

    // // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',
});