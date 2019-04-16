// Your code goes here



const logo = document.querySelector('.logo-heading');
const shark = document.querySelector('.intro');
const busImg = document.querySelector('src');


shark.addEventListener('mouseover', runEvent);

// function runEvent(e) {
//     busImg.setAttribute('src', "https://js-tutorials.nyc3.digitaloceanspaces.com/shark.png");
// }

logo.addEventListener('mousemove', runEvent);

function runEvent(e) {
    logo.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}