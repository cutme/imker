import Blazy from 'blazy';

document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.documentElement.classList.add('is-loaded');
        
        setTimeout(function() {
            cover.remove();
        }, 250);
        
        
        // Sliders 
        const home = document.getElementsByClassName('js-homeslider')[0];
        home ? window.homeSlider() : false;
        
        const reviews = document.getElementsByClassName('js-reviewsslider')[0];
        reviews ? window.reviewsSlider() : false;
        
        
        // B-lazy
        if (document.getElementsByClassName('b-lazy').length > 0) {
            window.bLazy = new Blazy({
                success: function success(el) {
                    let item = el.parentNode.parentNode;
                        item.classList.add('is-visible');
                        setTimeout(function () {
                            //el.classList.add('faded-in');
                        }, 1);
                    }
            });
        }
        
        // Anims on inview
        window.animsInit();
    };


    window.addEventListener('load', init);

}, false);