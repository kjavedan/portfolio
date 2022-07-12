import * as functions from './functions.js'

// getting home page sections  
const aboutMe = document.getElementById('about-me');
const mySkills = document.getElementById('my-skills');
const myProjects = document.getElementById('my-projects');
const projectOne = document.getElementById('project-1');
const contactMe = document.getElementById('contact-me');



// landing page text variables --------------------------------------
const myName = document.querySelector('.my-name');
const myJob = document.querySelector('.my-job');

// getting sections container variables which are simillar for most sections -------
const sectionContainer = document.querySelectorAll('.container');
const containerTitle = document.querySelectorAll('.container__title');
const mainTitle = document.querySelectorAll('.title');
const myTitle = document.querySelectorAll('.my-title');
const animationLine = document.querySelectorAll('.container__animation-line');
const sectionSubtitle = document.querySelectorAll('.container__subtitle');
const sectionText = document.querySelectorAll('.container__text');
const sectionButton = document.querySelectorAll('.container__button');

// variable related to my skill section ----------------------------------
const icons = document.querySelector('.icons');
const iconContainer = document.querySelectorAll('.icons-container');
const animationDiv = document.querySelector('.container__animation-div');
const projectsContainer = document.querySelectorAll('.project-container');
const contactMethods = document.querySelectorAll('.contact-method');
const toTopBtn = document.querySelector('.to-top-wrapper');



// get the about me and project wrapper in order to flex them in larger screen size
const wrapper = document.querySelectorAll('.wrapper');
const myProjectsWrapper = document.querySelector('.my-porjects-wrapper');
const subWrapper = document.querySelectorAll('.sub-wrapper');



window.addEventListener('load', () => {
    functions.addClassOpenTo(myName);
    functions.addClassOpenTo(myJob);
})


window.addEventListener('scroll', () => {
    const scrollingPosition = window.pageYOffset;
    const screenHeight = screen.height;
    // getting sctions position while scrolling the page
    const mySkillPosition = mySkills.offsetTop;
    const myProjectsPosition = myProjects.offsetTop;
    const projectOnePosition = projectOne.offsetTop;
    const contactMePosition = contactMe.offsetTop;

    


    // displaying about me section
    if (scrollingPosition > 250) {
        functions.addClassOpenTo(aboutMe);
        functions.setSectionValues(sectionContainer);
        functions.setSectionValues(wrapper);
        functions.setSectionValues(animationLine);
        functions.setSectionValues(containerTitle);
        functions.setSectionValues(mainTitle);
        functions.setSectionValues(myTitle);
        functions.setSectionValues(sectionSubtitle);
        functions.setSectionValues(sectionText);
        functions.setSectionValues(sectionButton);
        functions.addClassOpenTo(toTopBtn);
    }
    //remove to top btn when the user go back to the landing page
    if (scrollingPosition < 250) {
        functions.removeClassOpenFrom(toTopBtn);
    }

    if (scrollingPosition > (mySkillPosition - screenHeight + 500)) {
        functions.addClassOpenTo(mySkills);
        functions.addClassOpenTo(icons);
        functions.setItems(iconContainer);

    }
    // displaying my projects section
    if (scrollingPosition > (myProjectsPosition - screenHeight + 500)) {
        functions.addClassOpenTo(myProjects);
        functions.addClassOpenTo(myProjectsWrapper);
        functions.setSectionValues(subWrapper);
        functions.setSectionValues(animationLine);
        functions.setSectionValues(containerTitle);
        functions.setSectionValues(myTitle);
        functions.setSectionValues(sectionSubtitle);
        functions.setSectionValues(sectionText);
        functions.setSectionValues(sectionButton);
    }
    // displaying the projects; 
    /* *** note *** I have retyped the functions.setItems function
     here because if the user scroll pass my skills section
     and reach my projects section the function is steel working at
     my skills( reason : we have added some delay to display the items),
     therefore we should wait until it finish executing there so the project section
     can call it again. As a result it causes the computer to regiment.
     now projects section has its own function which means that it doesn't need to wait.
    */
    if (scrollingPosition > (projectOnePosition - screenHeight + 300)) {
        projectsContainer.forEach((project, index) => {
            setTimeout(() => {
                project.classList.add('open');
            }, 100 * index);
        })
    }





    // displaying contact me sectoin 
    if (scrollingPosition > (contactMePosition - screenHeight + 400)) {
        functions.addClassOpenTo(contactMe);
        functions.addClassOpenTo(animationDiv);
        functions.setItems(contactMethods);
    }


})
// scrolling to the top when the user click the to top btn
toTopBtn.addEventListener('click', () => {
    scrollTo(0, 0)
})

