import * as functions from './functions.js'


const moreAboutMeSection = document.querySelector('.more-about-me');
console.log(moreAboutMeSection);

const animationLine = document.querySelector('.container__animation-line');
const myTitle = document.querySelectorAll('.my-title');
console.log(animationLine);
console.log(myTitle);

window.addEventListener('scroll', ()=>{
    const scrollingPosition = window.pageYOffset;
    const screenHeight = screen.height;
    const moreAboutMePosition = moreAboutMeSection.offsetTop;

    if (scrollingPosition > (moreAboutMePosition - screenHeight + 250)) {
        functions.addClassOpenTo(animationLine);
        myTitle.forEach(item => {
            functions.addClassOpenTo(item);
        })
    }
})