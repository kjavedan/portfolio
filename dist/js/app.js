// getting the sections 
const aboutMe = document.getElementById('about-me');
const mySkills = document.getElementById('my-skills');
const myProjects = document.getElementById('my-projects');
const projectOne = document.getElementById('project-1');
const projectTwo = document.getElementById('project-2');
const projectThree = document.getElementById('project-3');
const projectFour = document.getElementById('project-4');
const contactMe = document.getElementById('contact-me');

/*
I want to display each project when the user scroll to its position on the page

1. get each project value
2. get each project postion
3. hide project in the default mode
4. display the project once the user scroll to its position
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
const animationDiv = document.querySelector('.container__animation-div');



window.addEventListener('DOMContentLoaded', ()=>{
    myName.classList.add('open');
    myJob.classList.add('open');
    
})
window.addEventListener('scroll', ()=>{
// getting sctions position while scrolling the page
    const scrollingPosition = window.pageYOffset;
    const mySkillPosition = mySkills.offsetTop;
    const myProjectsPosition = myProjects.offsetTop;
    const screenHeight = screen.height;
    const projectOnePosition = projectOne.offsetTop;
    const projectTwoPosition = projectTwo.offsetTop;
    const projectThreePosition = projectThree.offsetTop;
    const projectFourPosition = projectFour.offsetTop;
    const contactMePosition = contactMe.offsetTop;
  
   
// displaying about me section
    if(scrollingPosition >  250 ){
        aboutMe.classList.add('open');
        setSectionValues(animationLine);
        setSectionValues(containerTitle);
        setSectionValues(myTitle);
        setSectionValues(sectionSubtitle);
        setSectionValues(sectionText);
        setSectionValues(sectionButton); 
// displaying my skills section
    }
     if(scrollingPosition > (mySkillPosition - screenHeight + 500)){
        mySkills.classList.add('open');
        icons.classList.add('open');
        setIcons(iconContainer);
    }
// displaying my projects section
     if(scrollingPosition > (myProjectsPosition - screenHeight +500)){
        myProjects.classList.add('open');
        setSectionValues(animationLine);
        setSectionValues(containerTitle);
        setSectionValues(myTitle);
        setSectionValues(sectionSubtitle);
        setSectionValues(sectionText);
        setSectionValues(sectionButton);
// displaying each project once the user scroll to its position
        }
     if(scrollingPosition > (projectOnePosition - screenHeight + 300)){
        projectOne.classList.add('open');
     }
     if(scrollingPosition > (projectTwoPosition - screenHeight + 300)){
        projectTwo.classList.add('open');
     }
     if(scrollingPosition > (projectThreePosition - screenHeight + 300)){
        projectThree.classList.add('open');
     }
     if(scrollingPosition > (projectFourPosition - screenHeight + 300)){
        projectFour.classList.add('open');
     }
// displaying contact me sectoin 
     if(scrollingPosition > (contactMePosition - screenHeight + 500)){
        contactMe.classList.add('open');
        animationDiv.classList.add('open');
     }
    
  
})
// displaying the nav-bar once it is clicked
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

// add open class to each icon container with a .4s delay
function setIcons(items){
    let wait = 200;
    items.forEach((item,index)=>{
        setTimeout(()=>{
            item.classList.add('open');
        }, index * wait)
    })
}