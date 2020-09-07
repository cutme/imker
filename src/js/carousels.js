import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Autoplay, EffectFade, Navigation, Pagination]);


document.addEventListener('DOMContentLoaded',function() {
    
    const home = document.getElementsByClassName('js-homeslider')[0],
          reviews = document.getElementsByClassName('js-reviewsslider')[0];


    window.homeSlider = function() {
	    
	    const swiper = new Swiper(home, {
    	    autoHeight: true,
    	    autoplay: {
                delay: 4000,
            },
            effect: 'fade',
    	    fadeEffect: {
                crossFade: false
            },
    	    slidesPerView: 'auto',
    	    speed: 600
	    });
    };

    window.reviewsSlider = function() {
        
        const current = reviews.getElementsByClassName('js-current')[0],
              all = reviews.getElementsByClassName('js-all')[0];
	    
	    const swiper = new Swiper(reviews, {
    	    autoHeight: true,
    	    navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
    	    slidesPerView: 'auto',
    	    on: {
                init: function (e) {
                    all.innerHTML = e.slides.length;
                },
                slideChangeTransitionEnd: function(e) {
                    current.innerHTML =  swiper.activeIndex + 1;
                }
            },
	    });
    };

}, false)
