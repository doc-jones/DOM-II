// Your code goes here



const logo = document.querySelector('.logo-heading');
const img = document.querySelector('.intro');
const busImg = document.querySelector('img');
const text = document.querySelector('.content-section');
const nav = document.querySelector('.main-navigation');

img.addEventListener('mouseover', runEvent);

function runEvent(e) {
    busImg.src = "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/04/696/392/shar-2-KANE-OVERALL-MAGNUS-NEWS.jpg?ve=1&tl=1";
}

logo.addEventListener('mousemove', runEvent2);

function runEvent2(e) {
    logo.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}

text.addEventListener('focus', runEvent3);

function runEvent3(e) {
    text.textContent = "All your text are belong to me";
}

nav.addEventListener('dblclick', runEvent4);

function runEvent4(e) {
    nav.setAttribute('style', 'text-color: pink');
}