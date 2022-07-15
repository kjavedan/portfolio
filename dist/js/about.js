import * as functions from './functions.js'

// more about me variables
const moreAboutMeSection = document.querySelector('.more-about-me');
const animationLine = document.querySelector('.container__animation-line');
const myTitle = document.querySelectorAll('.my-title');

// gtting each item of my journey 
const myJourney = document.querySelector('.my-journey-container');
const itemOne = document.getElementById('item-1');
const itemTwo = document.getElementById('item-2');
const itemThree = document.getElementById('item-3');
const itemFour = document.getElementById('item-4');
const itemFive = document.getElementById('item-5');
const itemSix = document.getElementById('item-6');


window.addEventListener('scroll', ()=>{
    const scrollingPosition = window.pageYOffset;
    const screenHeight = screen.height;
    const moreAboutMePosition = moreAboutMeSection.offsetTop;
    // items container position
    const myJourneyPosition = myJourney.offsetTop;
    console.log('container :'+myJourneyPosition);
    console.log('   ')
    //items position relative to their container
    const itemOnePosition = itemOne.offsetTop;
    const itemTwoPosition = itemTwo.offsetTop;
    const itemThreePosition = itemThree.offsetTop;
    const itmeFourPosition = itemFour.offsetTop;
    const itemFivePosition = itemFive.offsetTop;
    const itemSixPosition = itemSix.offsetTop;

  // adding class open for the more about me text
    if (scrollingPosition > (moreAboutMePosition - screenHeight + 250)) {
        functions.addClassOpenTo(animationLine);
        myTitle.forEach(item => {
            functions.addClassOpenTo(item);
        })
    }
    // adding class open to itmem when the user scroll to their position
    if (scrollingPosition > (myJourneyPosition - screenHeight +100 )){
        functions.addClassOpenTo(itemOne);

        if(scrollingPosition > myJourneyPosition - screenHeight + 450){
            functions.addClassOpenTo(itemTwo)
        }
        if(scrollingPosition > myJourneyPosition - screenHeight + 800){
            functions.addClassOpenTo(itemThree)
        }
        if(scrollingPosition > myJourneyPosition - screenHeight + 1150){
            functions.addClassOpenTo(itemFour)
        }
        if(scrollingPosition > myJourneyPosition - screenHeight + 1500){
            functions.addClassOpenTo(itemFive)
        }
        if(scrollingPosition > myJourneyPosition - screenHeight + 1850){
            functions.addClassOpenTo(itemSix)
        }
    }
})