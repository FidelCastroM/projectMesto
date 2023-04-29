export class Popup {
    constructor(popupSelector) {
        this._popupElement = popupSelector;
        this._closeButton = this._popupElement.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
        this._handleCloseButton = this._handleCloseButton.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClose(event) {
        if (event.target === this._popupElement) {
            this.close();
        }
    }

    _handleCloseButton() {
        this.close();
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', this._handleOverlayClose);
        this._closeButton.addEventListener('click', this._handleCloseButton);
    }
}