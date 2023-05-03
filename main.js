let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('openmenu');
    navbar.classList.toggle('open');
}

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const navbar = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) navbar.classList.add('scroll-header'); else navbar.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)