class Carousel {
    constructor(params, renderingFunction) {
        this.selector = params.selector;
        this.imgPath = params.imgPath;
        this.list = params.list;
        this.circleControlsVisible = true;
        this.renderingFunction = renderingFunction;

        this.DOM = null;
    }

    init() {
        // patikrinti, ar validus selectorius, jei taip, tai dar issisaugoti kur ta vieta
        if (!this.isValidSelector()) {
            return 'Nevalidus selectorius';
        }

        if (!this.isValidImgPath()) {
            return 'Nevalidus imgPath';
        }

        if (!this.isValidList()) {
            return 'Nevalidus list';
        }

        this.render();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }

        this.DOM = DOM;
        return true;
    }

    isValidImgPath() {
        if (typeof this.imgPath !== 'string' ||
            this.imgPath === '') {
            return false;
        }
        return true;
    }

    isValidList() {
        if (!Array.isArray(this.list) ||
            this.list.length === 0) {
            return false;
        }
        return true;
    }

    render() {
        this.DOM.classList.add('carousel');

        let HTML = '';
        HTML += this.renderList();
        if (this.circleControlsVisible) {
            HTML += this.renderControls();
        }

        this.DOM.innerHTML = HTML;
    }

    renderList() {
        let HTML = '<div class="list">';

        for (const item of this.list) {
            if (this.isValidListItem(item)) {
                HTML += `<div class="item">
                            <div class="content">
                                ${this.renderingFunction(item, this.imgPath)}
                            </div>
                        </div>`;
            }
        }

        HTML += '</div>';

        return HTML;
    }

    renderControls() {
        let HTML = `<div class="controls">
                        <div class="circle active"></div>`;
        HTML += '<div class="circle"></div>'.repeat(this.list.length - 1);
        HTML += '</div>';

        return HTML;
    }

    isValidListItem(item) {
        if (typeof item !== 'object' ||
            Array.isArray(item) ||
            !item.img ||
            !item.text ||
            !item.name ||
            typeof item.img !== 'string' ||
            typeof item.text !== 'string' ||
            typeof item.name !== 'string' ||
            item.img == '' ||
            item.text == '' ||
            item.name == '') {
            return false;
        }
        return true;
    }
}

export { Carousel }