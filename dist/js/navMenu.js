import * as functions from './functions.js'


// getting the home page variables
// const preloader = document.getElementById('preloader');
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
const path = window.location.pathname;
const page = path.split('/').pop();
let currentPage = page.split('.')[0];
if (currentPage == "index") currentPage = "Home";
activePage.textContent = currentPage;
//adding class active for the active page and removing the class active from the un active page
navMenuItem.forEach(item => {
    const link = item.firstChild.href
    if (typeof (link) == 'string') {
        const linkText = link.split('/').pop();
        linkText == page ? item.classList.add("active") : item.classList.remove("active");
    }
})



// getting the date and display in the footer
const date = new Date();
document.getElementById('date').textContent = date.getFullYear();

// display preloader until the page completely load then load landing page content
// window.addEventListener('load', () => {
    functions.setItems(navMenuItem,300);
    // preloader.style.display = "none";
// })
// close preloader with a button 
// document.querySelector('.close-btn').addEventListener('click', ()=>{
//     preloader.style.display = "none";
// })



//-----------------------------------------------------
// display the nav items on large screen when the user try to expan the nav from the moile screen size untill the large screen
window.onresize = () => {
    if (screen.width > 1200) {
        functions.removeClassOpenFrom(navMenu);
        functions.setItems(navMenuItem,300);
        functions.removeClassOpenFrom(burgerBtn);
        functions.removeClassOpenFrom(rightDiv);
        functions.removeClassOpenFrom(leftDiv);
    
    }


}
// displaying the nav-bar once it is clicked
menuBtn.addEventListener('click', () => {
    functions.toggleClassOpen(burgerBtn);
    functions.toggleClassOpen(navMenu);
    functions.toggleClassOpen(rightDiv);
    functions.toggleClassOpen(leftDiv);

})

