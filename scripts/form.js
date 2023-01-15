// Находим форму в DOM
let formElement = document.querySelector('.pop-up__form')// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.pop-up__input-title')// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.pop-up__input-subtitle')// Воспользуйтесь инструментом .querySelector()

let profileTitle = document.querySelector('.profile__title')
let profileSubtitle = document.querySelector('.profile__subtitle')

nameInput.value = profileTitle.textContent
jobInput.value = profileSubtitle.textContent
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value

    // console.log(nameInput.getAttribute('value', true))
    // nameInputValue = nameInput.value
    console.log(nameInput.value)
    let name = nameInput.value
    let job = jobInput.value

    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = name
    profileSubtitle.textContent = job
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

// Нахожу кнопку в дом дереве и приваиваю ее переменной editButton
let editButton = document.querySelector('.profile__edit-button')
// Нахожу элемент pop-up в дом дереве и присваиваю его переменной popUp
let popUp = document.querySelector('.pop-up')
// Вешаю листенер для ожидания клика по editButton и выполнение функции с добавлением стиля открытия
function toggleForm() {
    popUp.classList.toggle('pop-up_opened')
}
editButton.addEventListener('click', toggleForm)

//Нахожу крестик в дом дереве у элемента popUp и присваиваю его переменное closeFormButton
let closeFormButton = document.querySelector('.pop-up__form-close-button')
// Пишу аналогичную функцию верхней для кнопк closeFormButton
closeFormButton.addEventListener('click', toggleForm)
