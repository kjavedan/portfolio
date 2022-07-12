// getting main page sections  
const aboutMe = document.getElementById('about-me');
const mySkills = document.getElementById('my-skills');
const myProjects = document.getElementById('my-projects');
const projectOne = document.getElementById('project-1');
const contactMe = document.getElementById('contact-me');

// getting the home page variables
const preloader = document.getElementById('preloader');

// menu variables ---------------------------------------------------
const burgerBtn = document.querySelector('.menu-btn__burger');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const navMenuItem = document.querySelectorAll('.nav-menu__item');
// choosing the active page to display on the left-header
const activePage = document.getElementById('active-page');
console.log(activePage); 
const path = window.location.pathname;
console.log(path); 
const page = path.split('/').pop();
console.log(page);
let currentPage = page.split('.')[0];
if (currentPage == "index") currentPage = "Home";
console.log(currentPage); 
activePage.textContent = currentPage;
//adding class active for the active page and removing the class active from the un active page
navMenuItem.forEach(item => {
    const link = item.firstChild.href
    console.log(link);
    if (typeof (link) == 'string') {
        const linkText = link.split('/').pop();
        linkText == page ? item.classList.add("active") : item.classList.remove("active");
    }
})

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

// used for nav animation mobile and tablet screen size-------------------
const rightDiv = document.querySelector('.right-div__animation');
const leftDiv = document.querySelector('.left-div__animation');

// get the about me and project wrapper in order to flex them in larger screen size
const wrapper = document.querySelectorAll('.wrapper');
const myProjectsWrapper = document.querySelector('.my-porjects-wrapper');
const subWrapper = document.querySelectorAll('.sub-wrapper');

// getting the date and display in the footer
const date = new Date();
document.getElementById('date').textContent = date.getFullYear();

// display preloader until the page completely load then load landing page content
window.addEventListener('load', () => {
    addClassOpenTo(myName);
    addClassOpenTo(myJob);
    setItems(navMenuItem);
    preloader.style.display = "none";
})
// close preloader with a button 
document.querySelector('.close-btn').addEventListener('click', ()=>{
    preloader.style.display = "none";
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
        addClassOpenTo(aboutMe);
        setSectionValues(sectionContainer);
        setSectionValues(wrapper);
        setSectionValues(animationLine);
        setSectionValues(containerTitle);
        setSectionValues(mainTitle);
        setSectionValues(myTitle);
        setSectionValues(sectionSubtitle);
        setSectionValues(sectionText);
        setSectionValues(sectionButton);
        addClassOpenTo(toTopBtn);
    }
    //remove to top btn when the user go back to the landing page
    if (scrollingPosition < 250) {
        removeClassOpenFrom(toTopBtn);
    }

    if (scrollingPosition > (mySkillPosition - screenHeight + 500)) {
        addClassOpenTo(mySkills);
        addClassOpenTo(icons);
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
    // displaying the projects; 
    /* *** note *** I have retyped the setItems function
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
        addClassOpenTo(contactMe);
        addClassOpenTo(animationDiv);
        setItems(contactMethods);
    }


})



// scrolling to the top when the user click the to top btn
toTopBtn.addEventListener('click', () => {
    scrollTo(0, 0)
})
//-----------------------------------------------------
// display the nav items on large screen when the user try to expan the nav from the moile screen size untill the large screen
window.onresize = () => {
    if (screen.width > 1200) {
        navMenu.classList.remove('open');
        setItems(navMenuItem);
        burgerBtn.classList.remove('open');
        rightDiv.classList.remove('open');
        leftDiv.classList.remove('open');
    }


}
// displaying the nav-bar once it is clicked
menuBtn.addEventListener('click', () => {
    toggleClassOpen(burgerBtn);
    toggleClassOpen(navMenu);
    toggleClassOpen(rightDiv);
    toggleClassOpen(leftDiv);

})
//-----------------------------------------------------


// functions************************************
function addClassOpenTo(item) {
    item.classList.add('open');
}

function removeClassOpenFrom(item) {
    item.classList.remove('open');
}
function toggleClassOpen(item) {
    item.classList.toggle('open');
}

// function to add the section items when the user scroll to their position
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

