const burgerBtn = document.querySelector('.menu-btn__burger');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navMenuItem = document.querySelectorAll('.nav-menu__item');
const rightDiv = document.querySelector('.right-div__animation');
const leftDiv = document.querySelector('.left-div__animation');


menuBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
    rightDiv.classList.toggle('open');
    leftDiv.classList.toggle('open');
    navMenuItem.forEach(item =>{
        item.classList.toggle('open');
    })
})