document.addEventListener('DOMContentLoaded', function() {
    
    const el = document.getElementsByClassName('js-questions')[0];
    
    const init = function() {

        const checkbox = el.getElementsByTagName('input'),
              icon = el.getElementsByClassName('js-icon'),
              list = el.getElementsByClassName('js-list')[0],
              pause = 300,
              question = el.getElementsByClassName('js-question'),
              submit = el.getElementsByClassName('js-submit')[0];
        
        const changeEventHandler = function(e) {
            return e.target.checked;
        }
        
        const action = function(e) {
            if( changeEventHandler(e) ) {
                
                const branch = e.currentTarget.parentNode.parentNode,
                      index = cutme.Helpers.thisIndex(branch.parentNode);

                if (question.length - 2 >= index) {
                
                    for (let i = 0; i < question.length; i++) {
                        setTimeout(function() {
                            question[i].parentNode.classList.remove('is-active');
                            
                            setTimeout(function() {
                                question[i].classList.add('is-hidden');
                            }, 200);
                        }, pause);
                    }
    
                    question = setTimeout(function() {
                        setTimeout(function() {
                            question[index+1].classList.remove('is-hidden');
                        }, 200);
                        
                        setTimeout(function() {
                            icon[index+1].classList.add('is-active');
                            question[index+1].parentNode.classList.add('is-active');
                        }, 400);
                    }, pause);
                
                } else {
                    
                    setTimeout(function() {
                        list.classList.add('is-inactive');
                        submit.classList.remove('is-inactive');
                        
                        
                    }, pause);
                }
            }
        };
        
        
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].onchange = action;
        }
    };
    
    
    el ? init() : false;
    
    
}, false);