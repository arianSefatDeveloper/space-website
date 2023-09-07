/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navMenu = document.getElementById('nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== GSAP ANIMATION ===============*/
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}


// ========Remove Menu Mobile ================
const navLink = document.querySelectorAll(".nav__link")
const linkAction=()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(link =>link.addEventListener("click", linkAction))
