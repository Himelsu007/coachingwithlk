const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', function () {
const currentScroll = window.scrollY;

// Check if the user has scrolled at least 300px down
if (currentScroll > 300) {
  if (currentScroll > lastScroll && !header.classList.contains('hidden')) {
    header.classList.add('hidden');
  } else if (currentScroll < lastScroll || currentScroll <= 0) {
    header.classList.remove('hidden');
  }
}

lastScroll = currentScroll;
});