const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.header-section__nav')
const menuMobile = document.querySelector('.menu-btn-mobile')

menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active')
    menuMobile.classList.toggle('active')
    menuBtn.classList.toggle('active')
})

 