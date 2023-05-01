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
    listForValidation,
    popupProfile,
    popupCard,
    popupImage,
    formAdd,
    formEdit,
    profileEdit,
    addButton,
    editAvatarButton,
    popupDelete,
    popupAvatar,
    formAvatar,
    container
} from '../utils/constants.js';

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
        userInfo.setUserInfo(userData);
        cards.renderItems(initialCards);
    })
    .catch(err => console.log(err));

const handleCardClick = (name, link) => {
    popupWithImage.openPopup(name, link);
}
const handleCardPopupDelete = (cardId, card) => {
    popupWithConfirmation.openPopup(cardId, card);
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

// Экземпляр профиля //
const userInfo = new UserInfo({ name: '.profile__name', about: '.profile__about-me', avatar: '.profile__avatar' });

// попап аватара
const popupNewAvatar = new PopupWithForm(popupAvatar, ({ avatar }) => {
    popupNewAvatar.renderLoading(true);
    api.userAvatar({ avatar })
        .then(( res ) => {
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
    formValiatorNewAvatar.resetValidation();

});
//попап данных
const popupInfo = new PopupWithForm(popupProfile, (card) => {
    popupInfo.renderLoading(true);
    api.userInfo(card)
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
            cards.prependItem(createCard(res));
        })
        .catch(console.log)
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
const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();
// удаление карточки
const popupWithConfirmation = new PopupWithConfirmation(popupDelete, () => {
    popupWithConfirmation.renderLoading(true);
    api.deleteCard(popupWithConfirmation.cardId)
        .then(() => {
            popupWithConfirmation.card.remove();
            popupWithConfirmation.closePopup();
        })
        .finally(() => {
            popupWithConfirmation.renderLoading(false)
        })
        .catch(console.log)
});
popupWithConfirmation.setEventListeners();

// валидации попапов 
const formValiatorUserInfo = new FormValidator(listForValidation, formEdit);
formValiatorUserInfo.enableValidation();
const formValiatorNewCard = new FormValidator(listForValidation, formAdd);
formValiatorNewCard.enableValidation();
const formValiatorNewAvatar = new FormValidator(listForValidation, formAvatar);
formValiatorNewAvatar.enableValidation();