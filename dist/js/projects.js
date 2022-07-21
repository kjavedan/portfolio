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
        icon : "/dist/img/dumbbell.png",
        backgroundImg : "/dist/img/IronBrothers.jpg",
        category : "fitness",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Online Shop",
        icon : "/dist/img/dumbbell.png",
        backgroundImg : "/dist//img/ecommerce.jpg",
        category : "Ecommerce",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Dream House",
        icon : "/dist/img/dumbbell.png",
        backgroundImg : "/dist//img/realEstate.jpg",
        category : "Real Estate",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
    {
        name : "Cars",
        icon : "/dist/img/dumbbell.png",
        backgroundImg : "/dist//img/car.jpg",
        category : "company",
        type : "Website",
        gihubLink : "",
        liveLink : "",
        onclickLink : ""
    },
]


// variables
const changingText = document.querySelector('.changing-text')
const projectsContainer = document.querySelector('.projects');


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
window.addEventListener('DOMContentLoaded', fadeInOut)
// displaying the text on the main page each 5s
setInterval(fadeInOut,5200)



const projects = projectsData.map(item => {
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

console.log(projects);

projectsContainer.innerHTML = projects;