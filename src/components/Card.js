export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick; 
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.element__image');
        this._likeButton = this._element.querySelector('.element__like');
        this._deleteButton = this._element.querySelector('.element__basket');
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    _setEventListeners = () => {
        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick();
            });

        this._deleteButton.addEventListener('click', () => {
                this._deleteCard();
            });

        this._cardImage.addEventListener('click', () => {
            this._handlePreviewPicture();
            });
    }

    _handleLikeClick() {
        this._likeButton.classList.toggle('element__like_active');
    }

    _deleteCard() {
        this._element.remove();
    }

    _handlePreviewPicture() {
        this._handleCardClick({ name: this._name, link: this._link });
    }

    generateCard() {
        this._setEventListeners();
        this._element.querySelector('.element__landscape').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        return this._element;
    }
};