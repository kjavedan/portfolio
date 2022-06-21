const burgerBtn = document.querySelector('.menu-btn__burger');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('open');
})