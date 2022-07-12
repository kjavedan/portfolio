
// getting the home page variables
const preloader = document.getElementById('preloader');

// used for nav animation mobile and tablet screen size-------------------
const rightDiv = document.querySelector('.right-div__animation');
const leftDiv = document.querySelector('.left-div__animation');
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



// getting the date and display in the footer
const date = new Date();
document.getElementById('date').textContent = date.getFullYear();

// display preloader until the page completely load then load landing page content
window.addEventListener('load', () => {
    setItems(navMenuItem);
    preloader.style.display = "none";
})
// close preloader with a button 
document.querySelector('.close-btn').addEventListener('click', ()=>{
    preloader.style.display = "none";
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

