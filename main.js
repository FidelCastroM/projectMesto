(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,u,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=n,this._templateSelector=r,this._handleCardClick=o,this._handleCardPopupDelete=i,this._handlePutLike=u,this._handleDeleteLike=a,this._userId=e,this._ownerId=n.owner._id,this._cardId=n._id,this.likes=n.likes,this._summaryLikes=n.likes.length}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){var t=document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0);return this._likeButton=t.querySelector(".element__like"),this._deleteButton=t.querySelector(".element__basket"),this._imageCard=t.querySelector(".element__image"),this._titleCard=t.querySelector(".element__landscape"),this._counterLikes=t.querySelector(".element__like-quantity"),t}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._ownerId!==this._userId&&(this._deleteButton.style.display="none"),this._counterLikes.textContent=this._summaryLikes,this.isLiked(this.likes)&&this._likeButton.classList.add("element__like_active"),this._setEventListeners(),this._imageCard.src=this._data.link,this._imageCard.alt=this._data.name,this._titleCard.textContent=this._data.name,this._card}},{key:"isLiked",value:function(t){var e=this;return t.some((function(t){return t._id===e._userId}))}},{key:"handlerToggleLike",value:function(t){var e=t.likes;this.likes=e,this._likeButton.classList.toggle("element__like_active"),this._counterLikes.textContent=e.length}},{key:"getId",value:function(){return this._cardId}},{key:"toggleLike",value:function(){this._likeButton.classList.contains("element__like_active")?this._handleDeleteLike(this):this._handlePutLike(this)}},{key:"_setEventListeners",value:function(){var t=this;this._deleteButton.addEventListener("click",(function(){t._handleCardPopupDelete(t._cardId,t._card)})),this._likeButton.addEventListener("click",(function(){t.toggleLike(t)})),this._imageCard.addEventListener("click",(function(){t._handleCardClick(t._data.name,t._data.link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelectors=e,this._formElement=n}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._formSelectors.inputSectionErrorLine),n.textContent=e,n.classList.add(this._formSelectors.spanPopupActive)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._formSelectors.inputSectionErrorLine),e.textContent="",e.classList.remove(this._formSelectors.spanPopupActive)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._settingButton.classList.add(this._formSelectors.buttonPopupInactive),this._settingButton.setAttribute("disabled","disabled")):(this._settingButton.classList.remove(this._formSelectors.buttonPopupInactive),this._settingButton.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._formSelectors.inputElement)),this._settingButton=this._formElement.querySelector(this._formSelectors.buttonPopup),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function c(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.closePopup()})),c(this,"_handleOverlyClick",(function(t){t.target===n._popup&&n.closePopup()})),this._popup=e,this._buttonclose=this._popup.querySelector(".popup__close")}var e,n;return e=t,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._buttonclose.addEventListener("click",(function(){return t.closePopup()})),this._popup.addEventListener("click",this._handleOverlyClick)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(r);if(o){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submit=e,n._buttonSubmit=t.querySelector(".popup__button"),n._form=t.querySelector(".popup__form"),n._inputList=t.querySelectorAll(".popup__input"),n._buttonSubmitText=n._buttonSubmit.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"renderLoading",value:function(t){this._buttonSubmit.textContent=t?"Сохранение...":this._buttonSubmitText}},{key:"setEventListeners",value:function(){var t=this;y(v(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submit(t._getInputValues())}))}},{key:"closePopup",value:function(){this._form.reset(),y(v(u.prototype),"closePopup",this).call(this)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imageCard=e._popup.querySelector(".popup__picture"),e._titleCard=e._popup.querySelector(".popup__figcaption"),e}return e=u,(n=[{key:"openPopup",value:function(t,e){_(S(u.prototype),"openPopup",this).call(this),this._imageCard.src=e,this._titleCard.textContent=t,this._imageCard.alt=t}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var E=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=n}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.append(t)}},{key:"prependItem",value:function(t){this._container.prepend(t)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var O=function(){function t(e){var n=e.name,r=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n)||document.createElement("div"),this._about=document.querySelector(r)||document.createElement("div"),this._avatar=document.querySelector(o)||document.createElement("div")}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._name.textContent=e,this._about.textContent=n,this._avatar.src=r,this.userId=o}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var q=new(function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._request("".concat(this._url,"/users/me"),"GET")}},{key:"userInfo",value:function(t){var e=t.name,n=t.about;return this._request("".concat(this._url,"/users/me"),"PATCH",{name:e,about:n})}},{key:"getInitialCards",value:function(){return this._request("".concat(this._url,"/cards"),"GET")}},{key:"userAvatar",value:function(t){var e=t.avatar;return this._request("".concat(this._url,"/users/me/avatar"),"PATCH",{avatar:e})}},{key:"postNewCard",value:function(t){var e=t.name,n=t.link;return this._request("".concat(this._url,"/cards"),"POST",{name:e,link:n})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t),"DELETE")}},{key:"putLike",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t,"/likes"),"PUT")}},{key:"deleteLike",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t,"/likes"),"DELETE")}},{key:"_request",value:function(t,e,n){return fetch(t,{method:e,headers:this._headers,body:n?JSON.stringify(n):null}).then(this._checkResponse)}},{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"7248d597-ad88-4774-97e9-2ed80a94a34f","Content-Type":"application/json"}});function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._deleteCard=e,n._deleteButton=n._popup.querySelector(".popup__button-delete"),n._deleteButtonText=n._deleteButton.textContent,n}return e=u,(n=[{key:"renderLoading",value:function(t){this._deleteButton.textContent=t?"Удаление...":this._deleteButtonText}},{key:"openPopup",value:function(t,e){R(A(u.prototype),"openPopup",this).call(this),this.cardId=t,this.card=e,this._deleteButton.addEventListener("click",this._deleteCard)}},{key:"closePopup",value:function(){R(A(u.prototype),"closePopup",this).call(this),this._deleteButton.addEventListener("click",this._deleteCard)}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s),D=document.querySelector(".elements"),U=(document.querySelector("#template"),document.querySelectorAll(".popup"),document.querySelectorAll(".popup__close"),document.querySelector("#edit")),N=document.querySelector("#add"),G=document.querySelector("#popup-image"),H=document.querySelector("#popup-delete"),M=document.querySelector("#redactAvatar"),z=document.querySelector(".popup__form-add"),J=document.querySelector(".popup__form-edit"),$=document.querySelector(".popup__form-avatar"),F=(document.querySelector(".popup__input_key_name"),document.querySelector(".popup__input_key_about-me"),document.querySelector(".popup__input_denomination"),document.querySelector(".popup__input_link-to-image"),document.querySelector(".profile__edit")),K=document.querySelector(".profile__add"),Q=document.querySelector(".profile__avatar-button"),W={formSelectors:".popup__form",inputElement:".popup__input",inputSectionErrorLine:"popup__input_type-error",spanPopupActive:"popup__input-error_active",buttonPopup:".popup__button",buttonPopupInactive:"popup__button_inactive"};function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Promise.all([q.getUserInfo(),q.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ot.setUserInfo(o),rt.renderItems(i)})).catch((function(t){return console.log(t)}));var Y=function(t,e){ct.openPopup(t,e)},Z=function(t,e){lt.openPopup(t,e)};function tt(t){return new n(ot.userId,t,"#template",Y,Z,et,nt).generateCard()}var et=function(t){q.putLike(t.getId()).then((function(e){t.handlerToggleLike(e)})).catch((function(t){return console.log(t)}))},nt=function(t){q.deleteLike(t.getId()).then((function(e){t.handlerToggleLike(e)})).catch((function(t){return console.log(t)}))},rt=new E((function(t){rt.addItem(tt(t))}),D),ot=new O({name:".profile__name",about:".profile__about-me",avatar:".profile__avatar"}),it=new h(M,(function(t){var e=t.avatar;it.renderLoading(!0),q.userAvatar({avatar:e}).then((function(t){ot.setUserInfo(t),it.closePopup()})).finally((function(){it.renderLoading(!1)})).catch((function(t){return console.log(t)}))}));it.setEventListeners(),Q.addEventListener("click",(function(){it.openPopup(),pt.resetValidation()}));var ut=new h(U,(function(t){ut.renderLoading(!0),q.userInfo(t).then((function(t){ot.setUserInfo(t),ut.closePopup()})).finally((function(){ut.renderLoading(!1)})).catch(console.log)}));F.addEventListener("click",(function(){ut.openPopup(),st.resetValidation(),ut.setInputValues(ot.getUserInfo())})),ut.setEventListeners();var at=new h(N,(function(t){at.renderLoading(!0),q.postNewCard(t).then((function(t){at.closePopup(),rt.prependItem(tt(t))})).catch(console.log).finally((function(){at.renderLoading(!1)}))}));K.addEventListener("click",(function(){at.openPopup(),ft.resetValidation()})),at.setEventListeners();var ct=new k(G);ct.setEventListeners();var lt=new V(H,(function(){lt.renderLoading(!0),q.deleteCard(lt.cardId).then((function(){lt.card.remove(),lt.closePopup()})).finally((function(){lt.renderLoading(!1)})).catch(console.log)}));lt.setEventListeners();var st=new i(W,J);st.enableValidation();var ft=new i(W,z);ft.enableValidation();var pt=new i(W,$);pt.enableValidation()})();