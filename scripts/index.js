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
function openPopUp (item) {
    item.classList.add('pop-up_opened') 
}
function closeForm(item) {
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
    photoNameInput.value = ''
    photoURLinput.value = ''
    openPopUp(popUpAddForm)
})

buttonCloseFormPhoto.addEventListener('click', () => {
    closeForm(popUpAddForm)
})

buttonAddPhoto.addEventListener('click', (evt)=>{
    evt.preventDefault();
    addPhoto()
    closeForm(popUpAddForm)
})

buttonCloseFormViewScreen.addEventListener('click', ()=>  {
    closeForm(popUpView)
})
function makePhotoCards (item)  {
    const photoCardElement = photoCardTemplate.querySelector('.elements-list__element').cloneNode(true)
    photoCardElement.querySelector('.elements-list__photo').src = item.link
    photoCardElement.querySelector('.elements-list__photo').alt = item.name
    photoCardElement.querySelector('.elements-list__title').textContent = item.name
    photoCardElement.querySelector('.elements-list__basket').addEventListener('click', function (e) {
        const eventTarget = e.target
        eventTarget.closest('.elements-list__element').remove()
    })
    photoCardElement.querySelector('.elements-list__like').addEventListener('click', function (e) {
        const eventTarget = e.target
        eventTarget.classList.toggle('elements-list__like_active')
    })
    photoCardElement.querySelector('.elements-list__photo').addEventListener('click', (e)=> {
        const eventTarget = e.target
        viewPhotoName.textContent = eventTarget.alt
        viewURL.src = eventTarget.src
        openPopUp(popUpView)
    })
    return photoCardElement
}

function  addPhoto() {
    const photoCardElement = photoCardTemplate.querySelector('.elements-list__element').cloneNode(true)
    photoCardElement.querySelector('.elements-list__photo').src = photoURLinput.value
    photoCardElement.querySelector('.elements-list__photo').alt = photoNameInput.value
    photoCardElement.querySelector('.elements-list__title').textContent = photoNameInput.value
    photoCardElement.querySelector('.elements-list__basket').addEventListener('click', function (e) {
        const eventTarget = e.target
        eventTarget.closest('.elements-list__element').remove()
    })
    photoCardElement.querySelector('.elements-list__like').addEventListener('click', function (e) {
        const eventTarget = e.target
        eventTarget.classList.toggle('elements-list__like_active')
    })
    photoCardElement.querySelector('.elements-list__photo').addEventListener('click', (e)=> {
        const eventTarget = e.target
        viewPhotoName.textContent = eventTarget.alt
        viewURL.src = eventTarget.src
        openPopUp(popUpView)
    })
    photoCardList.prepend(photoCardElement)
}
initialCards.forEach(function (item){
    photoCardList.prepend(makePhotoCards(item))
})
