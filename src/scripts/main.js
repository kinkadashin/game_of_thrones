const btnMobile = document.getElementById('btn-mobile')
const li = document.querySelector('.header__links__link')
const nav = document.getElementById('nav')

console.log(li)

function toggleMenu() {  
    nav.classList.toggle('header__links--active')
}

function closeMenu() {
    nav.classList.remove('header__links--active')
}

btnMobile.addEventListener('click', toggleMenu)
li.addEventListener('click', closeMenu)