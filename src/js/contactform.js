document.addEventListener('DOMContentLoaded',function() {
    
    const el = document.getElementsByClassName('js-contactform')[0];    

    const init = function() {
        
        const trigger = el.getElementsByClassName('js-lessmore')[0],
              details = el.getElementsByClassName('js-details'),
              word = el.getElementsByClassName('js-word')[0];
        

        const action = function(e) {            
            
            const less = e.currentTarget.dataset.less,
                  more = e.currentTarget.dataset.more;
            
            if (el.classList.contains('no-details')) {
                el.classList.remove('no-details');
                word.innerHTML = less;
                
                setTimeout(function() {
                    el.classList.remove('fadeout-details');
                }, 100);
                
            } else {
                
                el.classList.add('fadeout-details');
                word.innerHTML = more;
                
                setTimeout(function() {
                    el.classList.add('no-details');
                }, 200);
            }
                
            
            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        };
        
        trigger.addEventListener('click', action);        
    };
    
    el ? init() : false;  

}, false)
