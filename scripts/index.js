function openFormEditProfile(formId) {
    let popUp = document.getElementById(formId)
    const popUpForm = popUp.querySelector('form')
    popUp.classList.add('pop-up_opened')
    const profileName = document.querySelector('.profile__title')
    const profileJob = document.querySelector('.profile__subtitle')
    popUpForm.elements['name'].value = profileName.textContent
    popUpForm.elements['job'].value = profileJob.textContent

}
function openFormAddPhoto(formId) {
    const popUp = document.getElementById(formId)
    popUp.classList.add('pop-up_opened')

}
function closeForm(element) {
    let popUp = element.closest('.pop-up')
    popUp.classList.remove('pop-up_opened')
}
function saveProfile(form) {
    const profileName = document.querySelector('.profile__title')
    const profileJob = document.querySelector('.profile__subtitle')
    profileName.textContent = form.elements['name'].value
    profileJob.textContent = form.elements['job'].value
    closeForm(form)
    return false
}


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function addPhoto(item, to_start = false) {
    const photoCardTemplate = document.querySelector('#photo-card').content
    const photoCardElement = photoCardTemplate.querySelector('.elements-list__element').cloneNode(true)
    const photoCardList = document.querySelector('.elements-list')
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
    if (to_start)
        photoCardList.prepend(photoCardElement)
    else
        photoCardList.append(photoCardElement)

}
initialCards.forEach(function (item) {
    addPhoto(item)
})
function viewPhoto (photo) {
    let photoItem = document.getElementById('view-photo')
    photoItem.querySelector('.pop-up__image').src  = photo.src
    photoItem.querySelector('.pop-up__caption').textContent = photo.alt
    photoItem.classList.add('pop-up_opened')
}


function savePhoto(form) {
    console.log(form)
    let photoName = form.elements['photo-location'].value
    let photoLink = form.elements['photo-link'].value
    initialCards.unshift(
        {
            name: photoName,
            link: photoLink
        }
    )
    console.log(initialCards)
    addPhoto(initialCards[0], true)
    closeForm(form)
    return false
}
