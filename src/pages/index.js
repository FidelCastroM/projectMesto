import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import { 
    initialCards,
    listForValidation,
    popupProfile,
    popupCard,
    popupImage,
    formAdd,
    formEdit,
    nameInput,
    jobInput,
    profileEdit,
    addButton,
    nameInputDenomination,
    nameInputLink
} from '../utils/constants.js';

const handleCardClick = (item) => {
        popupOpenWithImg.open(item.name, item.link);
    };

// Cоздание карточек
const cardsSection = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardElement = createCardElement(item);
        cardsSection.addItem(cardElement);
    }
}, '.elements');
cardsSection.renderItems();

function createCardElement(item) {
    const card = new Card(item, '#template', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}


// Формы валидации //
const profileFormValidator = new FormValidator(listForValidation, formEdit);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(listForValidation, formAdd);
cardFormValidator.enableValidation();

const popupOpenWithImg = new PopupWithImage(popupImage);
popupOpenWithImg.setEventListeners();

// Экземпляр профиля //
const userInfo = new UserInfo({
    forename: '.profile__name',
    information: '.profile__about-me',
});


const popupInfo = new PopupWithForm(popupProfile, ({ forename, information }) => {
    userInfo.setUserInfo({
        forename,
        information
    });
})

profileEdit.addEventListener('click', () => {
    popupInfo.open();
    profileFormValidator.resetValidation();
    popupInfo.setInputValues(userInfo.getUserInfo());
});
popupInfo.setEventListeners();


// Экземпляр формы создания карточки
const popupNewImage = new PopupWithForm(popupCard, ({ name, link }) => {
    cardsSection.addItem(createCardElement({
        name,
        link
    }))
})

addButton.addEventListener('click', () => {
    popupNewImage.open();
    cardFormValidator.resetValidation()
});
popupNewImage.setEventListeners();