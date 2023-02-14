const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__subtitle')
const photoCardTemplate = document.querySelector('#photo-card').content
const photoCardList = document.querySelector('.elements-list')

function openPopUp (formId) {
    const popUp = document.getElementById(formId)
    popUp.classList.add('pop-up_opened') 
    return popUp  // возвращаю  переменную popUp чтобы в дальнейшем функции в которые будет вложена  данная  функция имели  возможность  обратиться к нему
}
function openFormEditProfile(formId) {
    openPopUp(formId)
    const popUpForm = openPopUp(formId).querySelector('form')
    popUpForm.elements['name'].value = profileName.textContent
    popUpForm.elements['job'].value = profileJob.textContent
    
}

function closeForm(element) {
    const popUp = element.closest('.pop-up')
    popUp.classList.remove('pop-up_opened')
}
function saveProfile(form) {
    profileName.textContent = form.elements['name'].value
    profileJob.textContent = form.elements['job'].value
    closeForm(form)
    return false
}

function addPhoto(item) {
    const photoCardElement = photoCardTemplate.querySelector('.elements-list__element').cloneNode(true)
    photoCardElement.querySelector('.elements-list__photo').src = item.link
    photoCardElement.querySelector('.elements-list__photo').alt = item.name
    photoCardElement.querySelector('.elements-list__title').textContent = item.name
    photoCardElement.querySelector('.elements-list__basket').addEventListener('click', function (e) {
        const eventTarget = e.target
        eventTarget.closest('.elements-list__element').style.display = 'none'
    })
    photoCardElement.querySelector('.elements-list__like').addEventListener('click', function (e) {
        const eventTarget = e.target
        eventTarget.classList.toggle('elements-list__like_active')
    })
        photoCardList.prepend(photoCardElement)

}
initialCards.forEach(function (item) {
    addPhoto(item)
})
function viewPhoto (photo, formId) {
    openPopUp(formId)
    openPopUp(formId).querySelector('.pop-up__image').src =  photo.src
    openPopUp(formId).querySelector('.pop-up__caption').textContent = photo.alt
}



function savePhoto(form) {
    const photoName = form.elements['photo-location'].value
    const photoLink = form.elements['photo-link'].value
    const newPhoto = {
        name: photoName,
        link: photoLink
    }

    addPhoto(newPhoto)
    closeForm(form)
    return false  // event  submit ожидает событие булевого типа ; true - то страничка перезагрузится при событии, если  получит false - стандартное поведение  браузера отменится.
}