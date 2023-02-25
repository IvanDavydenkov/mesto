const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const photoCardTemplate = document.querySelector('#photo-card').content
const photoCardList = document.querySelector('.elements-list')
const buttonEditForm =  document.querySelector('.profile__edit-button')
const buttonAdd = document.querySelector('.profile__add-button-box')
const popUpEditForm =  document.querySelector('#profile-form')
const popUpAddForm  = document.querySelector('#add-form')
const popUpView = document.querySelector('#view-photo')
const profileNameInput =  popUpEditForm.querySelector('.pop-up__input-title')
const profileJobInput =  popUpEditForm.querySelector('.pop-up__input-subtitle')
const viewPhotoName = popUpView.querySelector('.pop-up__caption')
const viewURL = popUpView.querySelector('.pop-up__image')
const photoNameInput = popUpAddForm.querySelector('.pop-up__input-title')
const photoURLinput =  popUpAddForm.querySelector('.pop-up__input-subtitle')
const buttonCloseForm = popUpEditForm.querySelector('.pop-up__form-close-button-box')
const buttonCloseFormPhoto = popUpAddForm.querySelector('.pop-up__form-close-button-box')
const buttonCloseFormViewScreen = popUpView.querySelector('.pop-up__form-close-button-box')
const buttonSaveProfile  =  popUpEditForm.querySelector('.pop-up__save-button') 
const buttonAddPhoto = popUpAddForm.querySelector('.pop-up__save-button')
const popUpContainerList  = Array.from(document.querySelectorAll('.pop-up__container'))
const popUpList = Array.from(document.querySelectorAll('.pop-up'))

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
function closeFormbyESC (evt, item){
    if(evt.key  === 'Escape'){
        closeForm(item)
    }
}

function openPopUp (item) {
    item.classList.add('pop-up_opened')
    document.addEventListener('keydown', closeFormByESC) 
    clearValidationErrors()
}
 function closeFormByESC(evt) {
        const item = document.querySelector('.pop-up_opened')
        if (evt.key === 'Escape') {
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
    openPopUp(popUpAddForm)
})

buttonCloseFormPhoto.addEventListener('click', () => {
    closeForm(popUpAddForm)
})
function disableButton(button) {
    button.disabled = true
    button.classList.add('button_disabled')
}
buttonAddPhoto.addEventListener('click', (evt)=>{
    evt.preventDefault();
    disableButton(buttonAddPhoto)
    addPhoto(photoNameInput.value, photoURLinput.value)
    closeForm(popUpAddForm)
})

buttonCloseFormViewScreen.addEventListener('click', ()=>  {
    closeForm(popUpView)
})
function makePhotoCards (item)  {
    const photoCardElement = photoCardTemplate.querySelector('.elements-list__element').cloneNode(true)
    const photo = photoCardElement.querySelector('.elements-list__photo')
    const photoTitle = photoCardElement.querySelector('.elements-list__title')
    const photoDeleteButton = photoCardElement.querySelector('.elements-list__basket')
    const photoLikeButton = photoCardElement.querySelector('.elements-list__like')
    const photoList  = photoCardElement.querySelector('.elements-list__photo')
    photo.src = item.link
    photo.alt = item.name
    photoTitle.textContent = item.name
    photoDeleteButton.addEventListener('click', function (e) {
        const eventTarget = e.target
        eventTarget.closest('.elements-list__element').remove()
    })
    photoLikeButton.addEventListener('click', function (e) {
        const eventTarget = e.target
        eventTarget.classList.toggle('elements-list__like_active')
    })
    photoList.addEventListener('click', (e)=> {
        const eventTarget = e.target
        viewPhotoName.textContent = eventTarget.alt
        viewURL.src = eventTarget.src
        viewURL.alt  = eventTarget.alt
        openPopUp(popUpView)
    })
    return photoCardElement
}

function  addPhoto(name, link) {
    const  item = {
        name: name,
        link:  link,
    }
    photoCardList.prepend(makePhotoCards(item))
}
initialCards.forEach(function (item){
    photoCardList.prepend(makePhotoCards(item))
})
