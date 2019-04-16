// Your code goes here



const logo = document.querySelector('.logo-heading');
const img = document.querySelector('.intro');
const busImg = document.querySelector('img');


img.addEventListener('mouseover', runEvent);

function runEvent(e) {
    busImg.src = "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/04/696/392/shar-2-KANE-OVERALL-MAGNUS-NEWS.jpg?ve=1&tl=1";
}

logo.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//     logo.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
// }