// expand and collapse feature

const fnmap = {
    'toggle': 'toggle',
      'show': 'add',
      'hide': 'remove'
  };
  const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
      target.classList[fnmap[cmd]]('show');
    });
  }
    
   
  const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
  
  window.addEventListener('click', (ev) => {
    const elm = ev.target;
    if (triggers.includes(elm)) {
      const selector = elm.getAttribute('data-target');
      collapse(selector, 'toggle');
    }
  }, false);

  //change the button text after collapse
  
  function changeTextButton()
  {
      this.value = (this.value == 'See more' ? 'See less' : 'See more');
  }
  document.getElementById('expanding-projects').onclick=changeTextButton;

  // animation of scrolling between sections 
 
        let anchorSelector = 'a[href^="#"]'; 
    
        let anchorList =  
            document.querySelectorAll(anchorSelector); 
                
        anchorList.forEach(link => { 
            link.onclick = function (e) { 
                    
                e.preventDefault(); 
                         
                let destination =  
                    document.querySelector(this.hash); 
   
                destination.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                }); 
            } 
        }); 

