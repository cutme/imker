import { TweenLite, ScrollToPlugin } from "gsap/all";
const scrollPlugin = ScrollToPlugin;
import customSelect from 'custom-select';

(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
        	isInView: isInView,
        	thisIndex: thisIndex,
        	scrollTo: scrollTo
        };
    };
    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };
	
	const thisIndex = function(elm) {
        let nodes = elm.parentNode.childNodes, node, i = 0, count = 0;
    
        while( (node = nodes.item(i++)) && node != elm ) {
            if( node.nodeType == 1 ) count++;            
        }
    
        return count;
    };
    
    const scrollTo = function (target, speed, offset) {    
		TweenLite.to(window, speed, {
			scrollTo: {
				y: target - offset,
				autoKill: false
			},
			ease: Power1.easeOut
		});
	};
    
    // Select
    
    (function() {
        
        const select = document.getElementsByTagName('select'),
              init = function() {
    
                const cstSel = customSelect(select);
                
                for (let i = 0; i < select.length; i ++) {
                    cstSel[i].container.addEventListener('custom-select:open', (e) => { 
                        e.target.parentNode.parentNode.style.position = 'relative';
                        e.target.parentNode.parentNode.style.zIndex = '5';
                    });
                    
                    cstSel[i].container.addEventListener('custom-select:close', (e) => { 
                        e.target.parentNode.parentNode.removeAttribute('style');
                    });
                }
            };
                
        select ? init() : false;
        
    })();

    cutme.Helpers = new Helpers();
    

}(window, document, window.cutme = window.cutme  || {}));