// getting the sections 
const aboutMe = document.getElementById('about-me');
const mySkills = document.getElementById('my-skills');
console.log(mySkills);

const burgerBtn = document.querySelector('.menu-btn__burger');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navMenuItem = document.querySelectorAll('.nav-menu__item');
const rightDiv = document.querySelector('.right-div__animation');
const leftDiv = document.querySelector('.left-div__animation');
const myName = document.querySelector('.my-name');
const myJob = document.querySelector('.my-job');
const myTitle = document.querySelectorAll('.my-title');
const animationLine =document.querySelectorAll('.container__animation-line');
const sectionSubtitle = document.querySelectorAll('.container__subtitle');
const sectionText =document.querySelectorAll('.container__text');
const sectionButton = document.querySelectorAll('.container__button');
const icons = document.querySelector('.icons');
const IconContainer = document.querySelectorAll('.icons-container');
console.log(icons);


window.addEventListener('DOMContentLoaded', ()=>{
    myName.classList.add('open');
    myJob.classList.add('open');
    
})
window.addEventListener('scroll', ()=>{
    const scrollingPosition = window.pageYOffset;
    const aboutMePosition = aboutMe.getBoundingClientRect();
    const mySkillPosition = mySkills.getBoundingClientRect();
    // console.log(aboutMePosition);
    // console.log(scrollingPosition);////////////
    // if(aboutMePosition <= 100){
    //     setAboutMe();
    //     setSectionValues(animationLine);
    //     setSectionValues(sectionSubtitle);
    //     setSectionValues(sectionText);
    //     setSectionValues(sectionButton); 
       
    // }
    //  if(mySkillPosition <=100){
    //     icons.classList.add('open');
    //     setSectionValues(IconContainer);
    // }
  
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
        // console.log('added');
        item.classList.add('open');
    })
    
}
// function to add the section list items
function setSectionValues(items){
    // console.log(items);     
    items.forEach(item =>{
        item.classList.add('open');
    })
    
}