// getting the sections 
const aboutMe = document.getElementById('about-me');
// console.log(aboutMe);

const burgerBtn = document.querySelector('.menu-btn__burger');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navMenuItem = document.querySelectorAll('.nav-menu__item');
const rightDiv = document.querySelector('.right-div__animation');
const leftDiv = document.querySelector('.left-div__animation');
const myName = document.querySelector('.my-name');
const myJob = document.querySelector('.my-job');
const myTitle = document.querySelectorAll('.my-title');
const animationLine =document.querySelector('.container__animation-line');
const sectionSubtitle = document.querySelector('.container__subtitle');
const sectionText =document.querySelector('.container__text');
const sectionButton = document.querySelector('.container__button');
window.addEventListener('DOMContentLoaded', ()=>{
    myName.classList.add('open');
    myJob.classList.add('open');
    
})
window.addEventListener('scroll', ()=>{
    const scrollingPosition = window.pageYOffset;
    const aboutMePosition = aboutMe.getBoundingClientRect().height;
    console.log(aboutMePosition);
    if(scrollingPosition > aboutMePosition){
        setAboutMe();
        animationLine.classList.add('open');
        sectionSubtitle.classList.add('open');     
        sectionText.classList.add('open');
        sectionButton.classList.add('open');     
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
function setAboutMe(){
    myTitle.forEach(item =>{
        console.log('added');
        item.classList.add('open');
    })
    
}