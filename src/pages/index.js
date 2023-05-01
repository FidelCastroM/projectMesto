import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

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
    nameInputLink,
    editAvatarButton,
    popupDelete,
    popupAvatar,
    formAvatar,
    templateCard,
    container
} from '../utils/constants.js';

// Экземпляр профиля //
const userInfo = new UserInfo({ forename: '.profile__name', information: '.profile__about-me', avatar: '.profile__avatar'});

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
        userInfo.setUserInfo(userData);
        cards.renderItems(initialCards);
    })
    .catch(err => console.log(err));

const handleCardClick = (name, link) => {
    popupBigImage.openPopup(name, link);
}
const handleCardPopupDelete = (cardId, card) => {
    popupDeleteCard.openPopup(cardId, card);
}

// создание карточки
function createCard(res) {
    const card = new Card(
    userInfo.userId,
    res,
    '#template',
    handleCardClick,
    handleCardPopupDelete,
    handlePutLike,
    handleDeleteLike);
    const newCard = card.generateCard();
    return newCard;
}

const handlePutLike = (card) => {
    api.putLike(card.getId())
        .then((res) => {
            card.handlerToggleLike(res)
        })
        .catch(err => console.log(err));

};
const handleDeleteLike = (card) => {
    api.deleteLike(card.getId())
        .then((res) => {
            card.handlerToggleLike(res)
        })
        .catch(err => console.log(err))
};
const cards = new Section((res) => {
    cards.addItem(createCard(res))
},
    container);
// попап аватара
const popupNewAvatar = new PopupWithForm(popupAvatar, ({ avatar }) => {
    popupNewAvatar.renderLoading(true);
    api.userAvatar({ avatar })
        .then(res => {
            userInfo.setUserInfo(res);
            popupNewAvatar.closePopup();
        })
        .finally(() => {
            popupNewAvatar.renderLoading(false)
        })
        .catch(err => console.log(err));
});
popupNewAvatar.setEventListeners();
editAvatarButton.addEventListener('click', () => {
    popupNewAvatar.openPopup();
    formValiatorNewAvatar.resetValidation()
});
//попап данных
const popupInfo = new PopupWithForm(popupProfile, (data) => {
    popupInfo.renderLoading(true);
    api.userInfo(data)
        .then((data) => {
            userInfo.setUserInfo(data);
            popupInfo.closePopup();
        })
        .finally(() => {
            popupInfo.renderLoading(false);

        })
        .catch(console.log);
});
profileEdit.addEventListener('click', () => {
    popupInfo.openPopup();
    formValiatorUserInfo.resetValidation();
    popupInfo.setInputValues(userInfo.getUserInfo());
});
popupInfo.setEventListeners();
// попап картинки
const popupNewImage = new PopupWithForm(popupCard, (card) => {
    popupNewImage.renderLoading(true);
    api.postNewCard(card)
        .then((res) => {
            popupNewImage.closePopup();
            cards.addItem(createCard(res));
        })
        .catch(err => console.log(err))
        .finally(() => {
            popupNewImage.renderLoading(false)
        });
})
addButton.addEventListener('click', () => {
    popupNewImage.openPopup();
    formValiatorNewCard.resetValidation()
});
popupNewImage.setEventListeners();
//попап развернутой картинки
const popupBigImage = new PopupWithImage(popupImage);
popupBigImage.setEventListeners();
// удаление карточки
const popupDeleteCard = new PopupWithConfirmation(popupDelete, (card) => {
    popupDeleteCard.renderLoading(true);
    api.deleteCard(card.cardId)
        .then(() => {
            popupDeleteCard.card.remove();
            popupDeleteCard.closePopup();
        })
        .finally(() => {
            popupDeleteCard.renderLoading(false)
        })
        .catch(err => console.log(err))
});
popupDeleteCard.setEventListeners();

// валидации попапов 
const formValiatorUserInfo = new FormValidator(listForValidation, formEdit);
formValiatorUserInfo.enableValidation();
const formValiatorNewCard = new FormValidator(listForValidation, formAdd);
formValiatorNewCard.enableValidation();
const formValiatorNewAvatar = new FormValidator(listForValidation, formAvatar);
formValiatorNewAvatar.enableValidation();