// Контейнер для темплейта
export const container = document.querySelector('.elements');
export const templateCard = document.querySelector('#template')

// Основной класс попапов
export const popups = document.querySelectorAll('.popup');

// Крестик закрытия попапов
export const closePopupButtons = document.querySelectorAll('.popup__close');

// Попапы
export const popupProfile = document.querySelector('#edit');
export const popupCard = document.querySelector('#add');
export const popupImage = document.querySelector('#popup-image');
export const popupDelete = document.querySelector('#popup-delete');
export const popupAvatar = document.querySelector('#redactAvatar');

// Формы попапов
export const formAdd = document.querySelector('.popup__form-add');
export const formEdit = document.querySelector('.popup__form-edit');
export const formAvatar = popupDelete.querySelector('.popup__form-avatar')

// Данные (текст) профиля
// export const profileName = document.querySelector('.profile__name');
// export const profileAboutMe = document.querySelector('.profile__about-me');

// Инпуты попапа редактирования профиля
export const nameInput = document.querySelector('.popup__input_key_name');
export const jobInput = document.querySelector('.popup__input_key_about-me');

// Инпуты попапа добавления карточки
export const nameInputDenomination = document.querySelector('.popup__input_denomination');
export const nameInputLink = document.querySelector('.popup__input_link-to-image');

// Кнопки открытия попапов с формами
export const profileEdit = document.querySelector('.profile__edit');
export const addButton = document.querySelector('.profile__add');
export const editAvatarButton = document.querySelector('.profile__avatar-button');

// Элементы форм
export const listForValidation = ({
    formSelectors: '.popup__form',
    inputElement: '.popup__input',
    inputSectionErrorLine: 'popup__input_type-error',
    spanPopupActive: 'popup__input-error_active',
    buttonPopup: '.popup__button',
    buttonPopupInactive: 'popup__button_inactive',
});

// Массив с ссылками и названиями для карточек
export const initialCards = [
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