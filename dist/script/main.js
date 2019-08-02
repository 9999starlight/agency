AOS.init();

const menu = document.querySelector('.menu');
const navList = document.querySelector('ul');
const filter = document.querySelector('.filter');
const lines = document.querySelectorAll('.line');
let showMenu = false;

function menuShow() {
    navList.classList.remove('hide');
    navList.classList.add('flex');
    filter.classList.remove('hide');
    filter.classList.add('flex;');
    lines.forEach(l => l.classList.add('transformMenu'));
    showMenu = true;
}

function menuHide() {
    navList.classList.remove('flex');
    navList.classList.add('hide');
    filter.classList.remove('flex');
    filter.classList.add('hide');
    lines.forEach(l => l.classList.remove('transformMenu'));
    showMenu = false;
}

function toggleMenu() {
    if (!showMenu) menuShow();
    else menuHide();
}
menu.addEventListener('click', toggleMenu);

// close menu when click on link window.innerWidth < 768
let links = document.querySelectorAll('.link')
function hideOpenedMenu() {
    links.forEach(a => a.addEventListener('click', menuHide));
}

// show header on scroll up / hide on scroll down
let previousScrollPosition = window.pageYOffset;
function hideOnScroll() {
    let currentScrollPosition = window.pageYOffset;
    if (previousScrollPosition > currentScrollPosition) {
        document.querySelector('header').style.display = 'flex';
    } else if (window.innerWidth < 768){
        menuHide();
        document.querySelector('header').style.display = 'none';
        hideOpenedMenu();
    } else {
        document.querySelector('header').style.display = 'none';
    }
    previousScrollPosition = currentScrollPosition
}
window.addEventListener('scroll', hideOnScroll);

// show/hide on load & resize
function mediaLinks() {
    if (window.innerWidth > 767) {
        navList.classList.remove('hide');
        navList.classList.add('flex');
        links.forEach(a => a.removeEventListener('click', menuHide));
    } else {
        navList.classList.add('hide');
        navList.classList.remove('flex');
    }
}
window.addEventListener('load', mediaLinks);
window.addEventListener('resize', mediaLinks);