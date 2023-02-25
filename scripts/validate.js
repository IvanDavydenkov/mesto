const formValidationConfig = {
    formSelector : '.pop-up__edit-form',
    inputSelector : '.pop-up__input',
    buttonSelector: '.pop-up__save-button',
    errorClass: 'pop-up__input-error',
    buttonDisabled: 'button_disabled'
}
const formAddConfig = {
    formSelector : '.pop-up__add-form',
    inputSelector : '.pop-up__input',
    buttonSelector: '.pop-up__save-button',
    errorClass: 'pop-up__input-error',
    buttonDisabled: 'button_disabled'
}
function disableSubmit (evt) {
    evt.preventDefault()
    
}
function handleFormInput (evt,config) {
    const input = evt.target
    const inputId = input.id
    const errorElement = document.querySelector(`#${inputId}-error`)
    if(input.validity.valid) {
        input.classList.remove(config.errorClass)
        errorElement.textContent = ''
    } else {
        input.classList.add(config.errorClass)
        errorElement.textContent = input.validationMessage
    }
}
function enableValidation(config){
    const form = document.querySelector(config.formSelector)
    form.addEventListener('submit', disableSubmit)
    form.addEventListener('input', ()=>{
        toggleButton(form,config)
    })
    addEventListeners(form,config)
    toggleButton(form,config)
}

function addEventListeners(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector))
    inputList.forEach((item)=>{
        item.addEventListener('input', (evt)=>{
            handleFormInput(evt,config)
        })
    })
}
function toggleButton(form, config){
    const buttonSubmit = form.querySelector(config.buttonSelector)
    const isFormValid = form.checkValidity()
    buttonSubmit.disabled = !isFormValid
    buttonSubmit.classList.toggle(config.buttonDisabled, !isFormValid)
}


enableValidation(formValidationConfig)
enableValidation(formAddConfig)


