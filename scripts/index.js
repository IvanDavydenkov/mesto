import {Card, initialCards} from './Card.js'
import {formValidationConfig, FormValidator} from './FormValidator.js'

const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const photoCardList = document.querySelector('.elements-list')
const buttonEditForm =  document.querySelector('.profile__edit-button')
const buttonAdd = document.querySelector('.profile__add-button-box')
const popUpEditForm =  document.querySelector('#profile-form')
const popUpAddForm  = document.querySelector('#add-form')
const popUpView = document.querySelector('#view-photo')
const profileNameInput =  popUpEditForm.querySelector('.pop-up__input-title')
const profileJobInput =  popUpEditForm.querySelector('.pop-up__input-subtitle')
const photoNameInput = popUpAddForm.querySelector('.pop-up__input-title')
const photoUrlInput =  popUpAddForm.querySelector('.pop-up__input-subtitle')
const buttonCloseForm = popUpEditForm.querySelector('.pop-up__form-close-button-box')
const buttonCloseFormPhoto = popUpAddForm.querySelector('.pop-up__form-close-button-box')
const buttonCloseFormViewScreen = popUpView.querySelector('.pop-up__form-close-button-box')
const buttonSaveProfile  =  popUpEditForm.querySelector('.pop-up__save-button') 
const buttonAddPhoto = popUpAddForm.querySelector('.pop-up__save-button')
const popUpContainerList  = Array.from(document.querySelectorAll('.pop-up__container'))
const popUpList = Array.from(document.querySelectorAll('.pop-up'))
const photoCardTemplate = document.querySelector('#photo-card').content
const viewPhotoName = popUpView.querySelector('.pop-up__caption')
const viewURL = popUpView.querySelector('.pop-up__image')
const editFormValidator = new FormValidator(formValidationConfig,'.pop-up__edit-form')
const addFormValidator = new FormValidator(formValidationConfig, '.pop-up__add-form')
// from Card module
initialCards.forEach((item)=>{
    let card = new Card((item.name),item.link)
    photoCardList.prepend(card.getTemplate())
})

buttonAddPhoto.addEventListener('click', (evt)=>{
    evt.preventDefault();
    let card = new Card(photoNameInput.value, photoUrlInput.value)
    photoCardList.prepend(card.getTemplate())
    closeForm(popUpAddForm)
})
// from Card module

popUpContainerList.forEach((item) => {
    item.addEventListener('click', (evt)=>{
    evt.stopPropagation()
    })
})
popUpList.forEach((item)=> {
    item.addEventListener('click', (evt)=>  {
        const popUp = evt.target
        closeForm(popUp)
    })  
})

function openPopUp (item) {
    item.classList.add('pop-up_opened')
    document.addEventListener('keydown', closeFormByESC) 
}
 function closeFormByESC(evt) {
     if (evt.key === 'Escape') {
            const item = document.querySelector('.pop-up_opened')
            closeForm(item)
        }
    }

function closeForm(item) {
    document.removeEventListener('keydown', closeFormByESC)  
    item.classList.remove('pop-up_opened')
}
function saveProfile(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value
    profileJob.textContent = profileJobInput.value
}
buttonEditForm.addEventListener('click', ()=>{
    profileNameInput.value = profileName.textContent
    profileJobInput.value = profileJob.textContent
    editFormValidator.clearValidationErrors()
    openPopUp(popUpEditForm)
})

buttonCloseForm.addEventListener('click', () => {
    closeForm(popUpEditForm)
})

buttonSaveProfile.addEventListener('click', (evt) =>{
    saveProfile(evt)
    closeForm(popUpEditForm)
})

buttonAdd.addEventListener('click', ()=> {
    document.querySelector('.pop-up__add-form').reset()
    editFormValidator.clearValidationErrors()
    openPopUp(popUpAddForm)
})

buttonCloseFormPhoto.addEventListener('click', () => {
    closeForm(popUpAddForm)
})

buttonCloseFormViewScreen.addEventListener('click', ()=>  {
    closeForm(popUpView)
})

editFormValidator.enableValidation()
addFormValidator.enableValidation()

export {photoCardTemplate, viewPhotoName,viewURL, openPopUp,popUpView}