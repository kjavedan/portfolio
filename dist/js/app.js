// getting the sections 
const aboutMe = document.getElementById('about-me');
const mySkills = document.getElementById('my-skills');

console.log(aboutMe.innerHTML);

/*
1. get the array
2. execute each item with a delay of .5s













*/

const burgerBtn = document.querySelector('.menu-btn__burger');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navMenuItem = document.querySelectorAll('.nav-menu__item');
const rightDiv = document.querySelector('.right-div__animation');
const leftDiv = document.querySelector('.left-div__animation');
const myName = document.querySelector('.my-name');
const myJob = document.querySelector('.my-job');
const containerTitle =document.querySelectorAll('.container__title');
const myTitle = document.querySelectorAll('.my-title');
const animationLine =document.querySelectorAll('.container__animation-line');
const sectionSubtitle = document.querySelectorAll('.container__subtitle');
const sectionText =document.querySelectorAll('.container__text');
const sectionButton = document.querySelectorAll('.container__button');
const icons = document.querySelector('.icons');
const iconContainer = document.querySelectorAll('.icons-container');
// console.log(icons);
// animationLine.forEach(item =>{console.log(item.parentNode.parentElement)});
// sectionButton.forEach(item =>{console.log(item.parentNode.parentElement)});


window.addEventListener('DOMContentLoaded', ()=>{
    myName.classList.add('open');
    myJob.classList.add('open');
    
})
window.addEventListener('scroll', ()=>{
    const scrollingPosition = window.pageYOffset;
    const aboutMePosition = aboutMe.offsetTop;
    const mySkillPosition = mySkills.offsetTop;
    const screenHeight = screen.height;
    // console.log('about me ' + aboutMePosition);
    // console.log('scroll '+scrollingPosition);
    // console.log('screen height ' +screenHeight);
    // console.log('myskill ' +mySkillPosition);
    // console.log(mySkillPosition - screenHeight +300);
    // console.log('\n')
 

    if(scrollingPosition >  250 ){
        aboutMe.classList.add('open');
        setSectionValues(animationLine);
        setSectionValues(containerTitle);
        setSectionValues(myTitle);
        setSectionValues(sectionSubtitle);
        setSectionValues(sectionText);
        setSectionValues(sectionButton); 
        
    }
     if(scrollingPosition > (mySkillPosition - screenHeight + 500)){
        mySkills.classList.add('open');
        icons.classList.add('open');
        setIcons(iconContainer);
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


// function to add the section list items
function setSectionValues(items){

    items.forEach(item =>{if(item.parentNode.parentNode.classList.contains('open')){
        item.classList.add('open');
    }});
   
}

// set the icons container with .5s delay
function setIcons(items){
    let wait = 500;
    items.forEach((item,index)=>{
        setTimeout(()=>{
            item.classList.add('open');
        }, index * wait)
    })
}