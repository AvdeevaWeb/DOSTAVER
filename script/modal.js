const modal = document.querySelector('.modal')
const contactBtn = document.querySelector('.contact-btn')
const modalCloseBtn = document.querySelector('.modal-conteiner__close-btn')
const radioInput = document.querySelector('.ptivacy__real-radio')
const radioInput2 = document.querySelector('.ptivacy__real-radio2')
const contactBtn2 = document.querySelector('.contact-btn2')

const contantForm = document.querySelectorAll('.contant-form')



contactBtn.addEventListener('click', function(){
    if(radioInput.checked){
        contantForm[0].value = ''
        modal.classList.toggle('visible')
    
    }
})
contactBtn2.addEventListener('click', function(){
    if(radioInput2.checked){
        modal.classList.toggle('visible')
        contantForm[1].value = ''
    }
})
modalCloseBtn.addEventListener('click', function(){
    modal.classList.toggle('visible')
})