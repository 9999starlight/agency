const menu = document.querySelector('.menu');
const links = document.querySelector('ul');
const filter = document.querySelector('.filter');
const lines = document.querySelectorAll('.line');
let showMenu = false;

function menuShow() {
    links.classList.remove('hide');
    links.classList.add('flex');
    filter.classList.remove('hide');
    filter.classList.add('flex;');
    lines.forEach(l => l.classList.add('transformMenu'));
    showMenu = true;
}

function menuHide() {
    links.classList.remove('flex');
    links.classList.add('hide');
    filter.classList.remove('flex');
    filter.classList.add('hide');
    lines.forEach(l => l.classList.remove('transformMenu'));
    showMenu = false;
}

function toggleMenu() {
    if (!showMenu) menuShow()
    else menuHide()
}
menu.addEventListener('click', toggleMenu);


// close & hide header on scroll
let previousScrollPosition = window.pageYOffset;
function hideOnScroll() {
    let currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition) {
        document.querySelector('header').style.display = 'flex';
    } else if (window.innerWidth < 768){
        menuHide()
        document.querySelector('header').style.display = 'none';
    } else {
        document.querySelector('header').style.display = 'none';
    }
    previousScrollPosition = currentScrollPosition
}
window.addEventListener('scroll', hideOnScroll);

function mediaLinks() {
    if (window.innerWidth > 767) {
        links.classList.remove('hide');
        links.classList.add('flex');

    } else {
        links.classList.add('hide');
        links.classList.remove('flex');
    }
}
window.addEventListener('load', mediaLinks);
window.addEventListener('resize', mediaLinks);