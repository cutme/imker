document.addEventListener('DOMContentLoaded', function() {
    
    let scroll_pos = window.pageYOffset || window.scrollY,
        out = false;

    const el = document.getElementsByClassName('js-top')[0],
          body = document.body;
    
    let down,
    	lastScrollTop = 0,
    	fixed = false,
    	ww = window.innerWidth;
    
    const action = function() {
        scroll_pos = window.pageYOffset || window.scrollY;
        ww = window.innerWidth;

        if (scroll_pos >= el.clientHeight) {
	        if (fixed === false) {
                el.classList.add('is-narrow');
                body.classList.add('is-scrolled');
                fixed = true;
            }
        }
                    
        else {
            if (fixed === true) {
	            el.classList.remove('is-narrow');
	            body.classList.remove('is-scrolled');
	            fixed = false;
	        }
        }
    };
    
    el ? window.addEventListener('scroll', action) : false;
    

}, false);