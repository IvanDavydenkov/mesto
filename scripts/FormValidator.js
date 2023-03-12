const formValidationConfig = {
	inputSelector: '.pop-up__input',
	buttonSelector: '.pop-up__save-button',
	errorClass: 'pop-up__input-error',
	buttonDisabled: 'button_disabled'
}

class FormValidator {
	constructor(config,form) {
		this._inputSelector = config.inputSelector
		this._buttonSelector = config.buttonSelector
		this._errorClass = config.errorClass
		this._buttonDisabled = config.buttonDisabled
		this._form = document.querySelector(form)
	}
	_disableSubmit(evt) {
		evt.preventDefault()
	}
	_handleFormInput(evt) {
		const input = evt.target
		const inputId = input.id
		const errorElement = document.querySelector(`#${inputId}-error`)
		if (input.validity.valid) {
			this._hideInputErrors(input, errorElement)
		} else {
			this._showInputErrors(input,  errorElement)
		}
	}
	_showInputErrors(input, errorElement) {
		input.classList.add(this._errorClass)
		errorElement.textContent = input.validationMessage
	}
	_hideInputErrors(input, errorElement) {
		input.classList.remove(this._errorClass)
		errorElement.textContent = ''
	}
	enableValidation() {
			this._form.addEventListener('submit', this._disableSubmit)
			this._form.addEventListener('input', () => {
				this._toggleButton(this._form)
			})
			this._addEventListeners(this._form)
			this._toggleButton(this._form)
	}
	_addEventListeners(form) {
		const inputList = Array.from(form.querySelectorAll(this._inputSelector))
		inputList.forEach((item) => {
			item.addEventListener('input', (evt) => {
				this._handleFormInput(evt)
			})
		})
	}
	_toggleButton(form) {
		const buttonSubmit = form.querySelector(this._buttonSelector)
		const isFormValid = form.checkValidity()
		buttonSubmit.disabled = !isFormValid
		buttonSubmit.classList.toggle(this._buttonDisabled, !isFormValid)
	}
	clearValidationErrors(){
		const errorList =  Array.from(document.querySelectorAll('.pop-up__input-error'))
		errorList.forEach((item)=>{
			item.textContent = ''
		})
	}
	disableButton(button) {
		button.disabled = true
		button.classList.add('button_disabled')
	}
	
}
export {formValidationConfig, FormValidator}

