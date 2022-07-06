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
I wnat to open each section in flex style when the user scroll to the specefic section

1. recognize the section
2. add class open to the section
3. add class open to the section children elements
*/

const burgerBtn = document.querySelector('.menu-btn__burger');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navMenuItem = document.querySelectorAll('.nav-menu__item');
const rightDiv = document.querySelector('.right-div__animation');
const leftDiv = document.querySelector('.left-div__animation');
const myName = document.querySelector('.my-name');
const myJob = document.querySelector('.my-job');
const containerTitle = document.querySelectorAll('.container__title');
const mainTitle = document.querySelectorAll('.title');
const myTitle = document.querySelectorAll('.my-title');
const animationLine = document.querySelectorAll('.container__animation-line');
const sectionSubtitle = document.querySelectorAll('.container__subtitle');
const sectionText = document.querySelectorAll('.container__text');
const sectionButton = document.querySelectorAll('.container__button');
const icons = document.querySelector('.icons');
const iconContainer = document.querySelectorAll('.icons-container');
const animationDiv = document.querySelector('.container__animation-div');
const projectsContainer = document.querySelectorAll('.project-container');
const contactMethods = document.querySelectorAll('.contact-method');
const toTopBtn = document.querySelector('.to-top-wrapper');


// get the containers of all sections
const sectionContainer = document.querySelectorAll('.container');
// get the about me and project wrapper in order to flex them in larger screen size
const wrapper = document.querySelectorAll('.wrapper');
const myProjectsWrapper = document.querySelector('.my-porjects-wrapper');
const subWrapper = document.querySelectorAll('.sub-wrapper');


window.addEventListener('DOMContentLoaded', () => {
    myName.classList.add('open');
    myJob.classList.add('open');
    setItems(navMenuItem);

})
window.addEventListener('scroll', () => {
    // getting sctions position while scrolling the page
    const scrollingPosition = window.pageYOffset;
    const mySkillPosition = mySkills.offsetTop;
    const myProjectsPosition = myProjects.offsetTop;
    const screenHeight = screen.height;
    const screenWidth = screen.width;
    const projectOnePosition = projectOne.offsetTop;
    const projectTwoPosition = projectTwo.offsetTop;
    const projectThreePosition = projectThree.offsetTop;
    const projectFourPosition = projectFour.offsetTop;
    const contactMePosition = contactMe.offsetTop;

   

    // displaying about me section
    if (scrollingPosition > 250) {
        aboutMe.classList.add('open');
        setSectionValues(sectionContainer);
        setSectionValues(wrapper);
        setSectionValues(animationLine);
        setSectionValues(containerTitle);
        setSectionValues(mainTitle);
        setSectionValues(myTitle);
        setSectionValues(sectionSubtitle);
        setSectionValues(sectionText);
        setSectionValues(sectionButton);
        toTopBtn.classList.add('open');
    }
    //remove to top btn when the user go back to the landing page
    if ( scrollingPosition < 250 ){
        toTopBtn.classList.remove('open');
    }

    if (scrollingPosition > (mySkillPosition - screenHeight + 500)) {
        mySkills.classList.add('open');
        icons.classList.add('open');
        setItems(iconContainer);
    
    }
    // displaying my projects section
    if (scrollingPosition > (myProjectsPosition - screenHeight + 500)) {
        myProjects.classList.add('open');
        myProjectsWrapper.classList.add('open');
        setSectionValues(subWrapper);
        setSectionValues(animationLine);
        setSectionValues(containerTitle);
        setSectionValues(myTitle);
        setSectionValues(sectionSubtitle);
        setSectionValues(sectionText);
        setSectionValues(sectionButton);
    }
    // displaying each project once the user scroll to its position on mobile screen size
    if (screenWidth < 660) {
        if (scrollingPosition > (projectOnePosition - screenHeight + 300)) {
            projectOne.classList.add('open');
        }
        if (scrollingPosition > (projectTwoPosition - screenHeight + 300)) {
            projectTwo.classList.add('open');
        }
        if (scrollingPosition > (projectThreePosition - screenHeight + 300)) {
            projectThree.classList.add('open');
        }
        if (scrollingPosition > (projectFourPosition - screenHeight + 300)) {
            projectFour.classList.add('open');
        }
    }
    // displaying each project on large screen with a delay
    if(screenWidth >= 660 ){
        if(scrollingPosition > (projectOnePosition - screenHeight + 300)){
        setItems(projectsContainer);
        // console.log(projectsContainer);
        }
    }
    // displaying contact me sectoin 
    if (scrollingPosition > (contactMePosition - screenHeight + 400)) {
        contactMe.classList.add('open');
        animationDiv.classList.add('open');
        setItems(contactMethods);
    }


})
// displaying the nav-bar once it is clicked
menuBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
    rightDiv.classList.toggle('open');
    leftDiv.classList.toggle('open');
    navMenuItem.forEach(item => {
        item.classList.toggle('open');
    })
})
// scrolling to the top when the user click the to top btn
toTopBtn.addEventListener('click', ()=>{
    scrollTo( 0 , 0)
})
//-----------------------------------------------------
// display the nav items on large screen when the user try to expan the nav from the moile screen size untill the large screen
window.onresize = ()=>{
    if(screen.width > 1200){
        navMenu.classList.remove('open');
        setItems(navMenuItem);
        burgerBtn.classList.remove('open');
        rightDiv.classList.remove('open');
        leftDiv.classList.remove('open');
    }
}
//-----------------------------------------------------


// functions************************************


// function to add the section list items
function setSectionValues(items) {

    items.forEach(item => {
        if (item.parentNode.classList.contains('open')) {
            item.classList.add('open');
        }
    });

}

// add open class to each  container with a .4s delay
function setItems(items) {
    let wait = 200;
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('open');
        }, index * wait)
    })
}