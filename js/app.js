const btnMenu=document.querySelector('.nav-btn')
const menu=document.querySelector('.nav-menu')

// toggle menu
btnMenu.addEventListener('click',function(){
    menu.classList.toggle('nav-menu--hidden')
})
// initialize AOS library
AOS.init();