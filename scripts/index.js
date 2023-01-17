let formElement = document.querySelector(".pop-up__form");
let nameInput = document.querySelector(".pop-up__input-title");
let jobInput = document.querySelector(".pop-up__input-subtitle");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let editButton = document.querySelector(".profile__edit-button");
let popUp = document.querySelector(".pop-up");
let closeFormButton = document.querySelector(".pop-up__form-close-button");

function handleFormSubmit(evt) {
  evt.preventDefault();
  let name = nameInput.value;
  let job = jobInput.value;
  profileTitle.textContent = name;
  profileSubtitle.textContent = job;
  closeForm();
}
formElement.addEventListener("submit", handleFormSubmit);
function openForm() {
  popUp.classList.add("pop-up_opened");

  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
function closeForm() {
  popUp.classList.remove("pop-up_opened");
}
editButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
