// Your code goes here
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`
//   * 
//   * Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`


const logoHeading = document.querySelector('.logo-heading');
const navLink = document.querySelector('.nav');
const headerImg = document.querySelector('.intro img');
const welcomeLine = document.querySelector('.intro h2');
const welcomeText = document.querySelector('.intro p');
const images = document.querySelectorAll('img');
const destinationTitle = document.querySelector('.destination h4');
const copyright = document.querySelector('.footer p');

logoHeading.addEventListener('mouseover', function (event) {
    logoHeading.style.color = 'red';
});

logoHeading.addEventListener('mouseleave', function (event) {
    logoHeading.style.color = 'black';
});

navLink.addEventListener('dblclick', function (event) {
    navLink.style.fontWeight = 'bold';
});

navLink.addEventListener('click', function (event) {
    navLink.style.fontWeight = 'normal';
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        headerImg.style.display = 'none';
    }
});

document.addEventListener('selectstart', function (event) {
    welcomeLine.style.backgroundColor = 'yellow';
});

document.addEventListener('pointermove', function (event) {
    welcomeText.style.color = 'pink';
});

document.addEventListener('scroll', function (event) {
    images[2].style.width = '10px';
});

copyright.addEventListener('mousedown', function (event) {
    copyright.style.fontSize = '200px';
});

function border() {
    destinationTitle.style.border = 'thick solid red';
}
window.addEventListener('focus', border);

Array.from(document.all).forEach((elem) => {
    elem.addEventListener('click', (event) => {
        console.log(event.target);
        console.log(event.currentTarget);
        console.log('\n');
        event.stopPropagation();
    });
});

Array.from(document.links).forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
        event.preventDefault();
    });
});