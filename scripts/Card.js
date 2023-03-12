import {photoCardTemplate, viewPhotoName, viewURL, openPopUp,popUpView} from './index.js'
class Card {
	constructor(name, image, template='.elements-list__element') {
		this._name = name
		this._image = image
		this._template = template
	}
		getTemplate(){
			const photoCardElement = photoCardTemplate.querySelector(this._template).cloneNode(true)
			const photo = photoCardElement.querySelector('.elements-list__photo')
			const photoTitle = photoCardElement.querySelector('.elements-list__title')
			photo.src = this._image
			photo.alt = this._name
			photoTitle.textContent = this._name
			this._setEventListeners(photoCardElement)
			return photoCardElement
		}
		_setEventListeners(photoCardElement){
			const photoDeleteButton = photoCardElement.querySelector('.elements-list__basket')
			const photoLikeButton = photoCardElement.querySelector('.elements-list__like')
			const photoList  = photoCardElement.querySelector('.elements-list__photo')
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
	}
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
export {Card, initialCards}
