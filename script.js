  //Navigation bar collapse
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const navMenu = document.querySelector('#navbar-default');

    toggleButton.addEventListener('click', function () {
      navMenu.classList.toggle('hidden');
    });
  });

  
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


// Hamburger menu outline visible only when the menu is expanded
const toggleButton = document.querySelector('#menuToggle');
const navMenu = document.querySelector('#navbar-default');
toggleButton.addEventListener('click',()=>{
  const isHidden = navMenu.classList.contains('hidden');

  if(isHidden){
    toggleButton.classList.add( 'ring-[#e63946]', 'ring-2')
  }else{
    toggleButton.classList.remove('ring-[#e63946]', 'ring-2');
  }
})


// AOS initialization
AOS.init({
    duration: 800
  });


