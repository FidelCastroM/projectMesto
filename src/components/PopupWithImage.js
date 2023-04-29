import { Popup } from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupElement.querySelector('.popup__picture');
        this._caption = this._popupElement.querySelector('.popup__figcaption');
    }

    open(name, link) {
        super.open();
        this._image.src = link;
        this._image.alt = name;
        this._caption.textContent = name;
    }
}