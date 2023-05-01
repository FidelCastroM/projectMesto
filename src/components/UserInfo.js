export default class UserInfo {
    constructor({ name, about, avatar }) {
        this._name = document.querySelector(name) || document.createElement('div');;
        this._about = document.querySelector(about) || document.createElement('div');;
        this._avatar = document.querySelector(avatar) || document.createElement('div');;
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
            avatar: this._avatar.src,
        }
    }
    setUserInfo({ name, about, avatar, _id }) {
        this._name.textContent = name;
        this._about.textContent = about;
        this._avatar.src = avatar;
        this.userId = _id;
    }
}
