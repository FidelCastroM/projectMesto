export default class Section {//добавление карточек
    constructor(renderer, container) {
        this._renderer = renderer;
        this._container = container;
    }

    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }
    addItem(element) {
        this._container.append(element);
    }

    prependItem(element) {
        this._container.prepend(element);
    }
}