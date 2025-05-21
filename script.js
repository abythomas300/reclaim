  //Navigation bar collapse
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("[data-collapse-toggle]");
    const navMenu = document.getElementById("navbar-default");

    toggleButton.addEventListener("click", function () {
      navMenu.classList.toggle("hidden");
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


// AOS initialization
AOS.init({
    duration: 800
  });


