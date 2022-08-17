const menuEmail = document.querySelector('.navbar-email');
const desktoMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktop)

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click', toggleDesktop)


const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside =document.querySelector('.product-detail0');
menuCarrito.addEventListener.toggle('click', toggleCarritoAside)

function toggleDesktop(){
    desktoMenu.classList.toggle('inactive');
}

function toggleDesktop() {
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive')
if (mobileMenu.classList.contains('inactive'))
}

