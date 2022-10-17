import * as functions from './functions.js'


const myArray = [{
    text : " I'm excited to show you my work :)",
    color : "blue"
},
{
    text: " Please let me know if you enjoy it",
    color: "red"
},
{
    text: " peace!",
    color: "lightgreen"
}];

const projectsData = [
    {
        name : "Iron Brothers",
        icon : "./img/dumbbell.png",
        backgroundImg : "./img/Iron-brothers.jpg",
        category : "fitness",
        type : "Design",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Online Shop",
        icon : "./img/dumbbell.png",
        backgroundImg : ".//img/ecommerce.jpg",
        category : "Ecommerce",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Dream House",
        icon : "./img/dumbbell.png",
        backgroundImg : ".//img/realEstate.jpg",
        category : "Real Estate",
        type : "Design",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Cars",
        icon : "./img/dumbbell.png",
        backgroundImg : ".//img/car.jpg",
        category : "company",
        type : "Design",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Iron Brothers",
        icon : "./img/dumbbell.png",
        backgroundImg : "./img/IronBrothers.jpg",
        category : "fitness",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Online Shop",
        icon : "./img/dumbbell.png",
        backgroundImg : ".//img/ecommerce.jpg",
        category : "Ecommerce",
        type : "Design",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Dream House",
        icon : "./img/dumbbell.png",
        backgroundImg : ".//img/realEstate.jpg",
        category : "Real Estate",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Cars",
        icon : "./img/dumbbell.png",
        backgroundImg : ".//img/car.jpg",
        category : "company",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Iron Brothers",
        icon : "./img/dumbbell.png",
        backgroundImg : "./img/IronBrothers.jpg",
        category : "fitness",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Online Shop",
        icon : "./img/dumbbell.png",
        backgroundImg : ".//img/ecommerce.jpg",
        category : "Ecommerce",
        type : "Design",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Dream House",
        icon : "./img/dumbbell.png",
        backgroundImg : ".//img/realEstate.jpg",
        category : "Real Estate",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Cars",
        icon : "./img/dumbbell.png",
        backgroundImg : ".//img/car.jpg",
        category : "company",
        type : "Design",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    }
]


// variables
const changingText = document.querySelector('.changing-text')
const projectsContainer = document.querySelector('.projects');
const filterBtns = document.querySelectorAll('.filter__btn');
const contactMe = document.getElementById('contact-me');
const animationDiv = document.querySelector('.container__animation-div');
const contactMethods = document.querySelectorAll('.contact-method');
const animationLine = document.querySelector('.container__animation-line');
const myTitle = document.querySelector('.my-title');
const subtitle = document.querySelector('.container__subtitle');


// landing page text animation function
let count = 0;
let wait = 20;
function fadeInOut(){
    changingText.innerHTML = "";
    changingText.style.color = myArray[count].color;
    const textLetter = myArray[count].text.split("")

    for(let i=0; i < textLetter.length; i++){
        
        changingText.innerHTML += `<span class="animated-text">${textLetter[i]}</span>`
        setTimeout(()=>{
            document.querySelectorAll('.animated-text')[i].classList.add('fade-in')
        }, 20 * i)
        wait *= i;
        setTimeout(()=>{
            setTimeout(()=>{
                document.querySelectorAll('.animated-text')[i].classList.add('fade-out')
            },20 * i)
        },3500)
    }
    count++;
    if(count == myArray.length) count = 0;
}
// running fadeInOut on loading the page
window.addEventListener('DOMContentLoaded', ()=>{
    fadeInOut();
    setInterval(fadeInOut,5200);
    setProjectsItems(projectsData);
})

//adding functionality to the filter buttons
filterBtns.forEach(btn =>{
    // btn.classList.remove('active')
    btn.addEventListener('click',()=>{
     const targetBtn = btn.dataset.id;
    //adding underline to the category when the user click it
        filterBtns.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active')
     // displaying projects base on what the user click
     if(targetBtn != "all"){
        const targetProjects = projectsData.filter(project =>{
            if(targetBtn === project.type) return project;
        })
        setProjectsItems(targetProjects);
     }
     // displaying all projects
     else{
        setProjectsItems(projectsData);
     }
    })
})

window.addEventListener('scroll', () => {
    const scrollingPosition = window.pageYOffset;
    const screenHeight = screen.height;
   
    const contactMePosition = contactMe.offsetTop;

    // displaying contact me sectoin 
    if (scrollingPosition > (contactMePosition - screenHeight + 100)) {
        functions.addClassOpenTo(contactMe);
        functions.addClassOpenTo(animationDiv);
        functions.addClassOpenTo(animationLine);
        functions.addClassOpenTo(myTitle);
        functions.addClassOpenTo(subtitle);
        functions.setItems(contactMethods,300);
    
    }
})
function setProjectsItems(data){

    const projects = data.map(item => {
        
        return(
            `<!-- start of project  -->
        <div class="project-container open">
            <div class="projects-item">
                <a href="#" class="projects-item__link">${item.onclickLink}</a>
                <img class="projects-item__image" src=${item.backgroundImg} alt="project-image">
                <div class="projects-item__logo">
                    <img src=${item.icon} alt="logo">
                </div>
                <div class="projects-item__info">
                    <h1 class="project-title">${item.name}</h1>
                    <h4 class="project-subtitle">${item.type}</h4>
                    <h3 class="project-category">${item.category}</h3>
                </div>
                <div class="projects-item__btns">
                    <a class="project__btn" href=${item.liveLink}>
                        <i class="fa-solid fa-eye"></i>
                    </a>
                    <a class="project__btn" href=${item.gihubLink}>
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <!-- end of project -->`)
    }).join("")
    
    projectsContainer.innerHTML = projects;
}
