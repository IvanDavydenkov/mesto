const formValidationConfig = {
    formSelector: ['.pop-up__edit-form', '.pop-up__add-form'],
    inputSelector: '.pop-up__input',
    buttonSelector: '.pop-up__save-button',
    errorClass: 'pop-up__input-error',
    buttonDisabled: 'button_disabled'
}
function disableSubmit(evt) {
    evt.preventDefault()
}
function handleFormInput(evt, config) {
    const input = evt.target
    const inputId = input.id
    const errorElement = document.querySelector(`#${inputId}-error`)
    if (input.validity.valid) {
        hideInputErrors(input, config, errorElement)
    } else {
        showInputErrors(input, config, errorElement)
    }
}
function showInputErrors(input, config, errorElement) {
    input.classList.add(config.errorClass)
    errorElement.textContent = input.validationMessage
}

function hideInputErrors(input, config, errorElement) {
    input.classList.remove(config.errorClass)
    errorElement.textContent = ''
}

function enableValidation(config) {
    config.formSelector.forEach((item) => {
        const form = document.querySelector(item)
        form.addEventListener('submit', disableSubmit)
        form.addEventListener('input', () => {
            toggleButton(form, config)
        })
        addEventListeners(form, config)
        toggleButton(form, config)
    })
}
function addEventListeners(form, config) {
    const inputList = Array.from(form.querySelectorAll(config.inputSelector))
    inputList.forEach((item) => {
        item.addEventListener('input', (evt) => {
            handleFormInput(evt, config)
        })
    })
}
function toggleButton(form, config) {
    const buttonSubmit = form.querySelector(config.buttonSelector)
    const isFormValid = form.checkValidity()
    buttonSubmit.disabled = !isFormValid
    buttonSubmit.classList.toggle(config.buttonDisabled, !isFormValid)
}

function clearValidationErrors(){
    const errorList =  Array.from(document.querySelectorAll('.pop-up__input-error'))
    errorList.forEach((item)=>{
        item.textContent = ''
    })
}

enableValidation(formValidationConfig)



