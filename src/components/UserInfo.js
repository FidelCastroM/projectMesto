export default class UserInfo {
    constructor({ forename, information, avatar }) {
        this._forename = document.querySelector(forename);
        this._information = document.querySelector(information);
        this._avatar = document.querySelector(avatar);
    }
    getUserInfo() {
        return {
            forename: this._forename.textContent,
            information: this._information.textContent,
            avatar: this._avatar.src,
        }
    }
    setUserInfo({ forename, information, avatar, _id }) {
        this._forename.textContent = forename;
        this._information.textContent = information;
        this._avatar.src = avatar;
        this.userId = _id;
    }
}
