const changingText = document.querySelector('.changing-text')


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


let count = 0;
let wait = 20;
function fadeInOut(){
    console.log('executed');
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

fadeInOut()
setInterval(fadeInOut,5200)
