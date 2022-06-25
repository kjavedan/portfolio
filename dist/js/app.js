const burgerBtn = document.querySelector('.menu-btn__burger');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navMenuItem = document.querySelectorAll('.nav-menu__item');
const rightDiv = document.querySelector('.right-div__animation');
const leftDiv = document.querySelector('.left-div__animation');
const myName = document.querySelector('.my-name');
const myJob = document.querySelector('.my-job');
const myTitle = document.querySelectorAll('.my-title');

window.addEventListener('DOMContentLoaded', ()=>{
    myName.classList.add('open');
    myJob.classList.add('open');
    
})
window.addEventListener('scroll', ()=>{
    const scrollingPosition = window.pageYOffset;
    console.log(scrollingPosition);
    if(scrollingPosition > 250){
        aboutMe();
    }
  
})

menuBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
    rightDiv.classList.toggle('open');
    leftDiv.classList.toggle('open');
    navMenuItem.forEach(item =>{
        item.classList.toggle('open');
    })
})


// functions************************************

// add .open to about me section when the the section position is reached;
function aboutMe(){
    myTitle.forEach(item =>{
        console.log('added');
        item.classList.add('open');
    })
    
}