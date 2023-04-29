export default class UserInfo {
    constructor({ forename, information }) {
        this._nameSection = document.querySelector(forename);
        this._aboutSection = document.querySelector(information);
    }

    getUserInfo() {
        return {
            forename: this._nameSection.textContent,
            information: this._aboutSection.textContent
        };
    }

    setUserInfo({ forename, information }) {
        this._nameSection.textContent = forename;
        this._aboutSection.textContent = information;
    }
}
