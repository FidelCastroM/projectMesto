export default class FormValidator {
    constructor(config, formSelectors) {
        this._formSelectors = config;
        this._formElement = formSelectors;
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
            inputElement.classList.add(this._formSelectors.inputSectionErrorLine);
            errorElement.textContent = errorMessage;
            errorElement.classList.add(this._formSelectors.spanPopupActive);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
            inputElement.classList.remove(this._formSelectors.inputSectionErrorLine);
            errorElement.textContent = '';
            errorElement.classList.remove(this._formSelectors.spanPopupActive);
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._settingButton.classList.add(this._formSelectors.buttonPopupInactive);
            this._settingButton.setAttribute('disabled', 'disabled');
        } else {
            this._settingButton.classList.remove(this._formSelectors.buttonPopupInactive);
            this._settingButton.removeAttribute('disabled');
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._formSelectors.inputElement));
        this._settingButton = this._formElement.querySelector(this._formSelectors.buttonPopup);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }

    resetValidation() {
        this._inputList.forEach((input) => {
            this._hideInputError(input);
        })
        this._toggleButtonState();
    }
}