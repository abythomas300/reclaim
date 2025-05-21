// SOS button displayed only after user engagement
const sosBtn = document.querySelector('#sosButton');

window.addEventListener('scroll', ()=>{
        if(window.scrollY > 1000){
            sosBtn.classList.remove('opacity-0', 'pointer-events-none');
            sosBtn.classList.add('opacity-100')
        }else{
            sosBtn.classList.add('opacity-0', 'pointer-events-none');
            sosBtn.classList.remove('opacity-100')
        }
    }
);


// AOS initialization
AOS.init({
    duration: 800
  });
