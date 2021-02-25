class Carousel {
    constructor(params, renderingFunction) {
        this.selector = params.selector;
        this.imgPath = params.imgPath;
        this.list = params.list;
        this.circleControlsVisible = true;
        this.renderingFunction = renderingFunction;

        this.DOM = null;
        this.listDOM = null;
        this.controlCircles = null;
        this.activeCircleIndex = 0;
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
        this.addEvents();
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

        this.listDOM = this.DOM.querySelector('.list');
        this.controlCircles = this.DOM.querySelectorAll('.controls > .circle');
    }

    renderList() {
        let HTML = `<div class="list" style="width: ${this.list.length}00%;">`;
        const itemWidth = 100 / this.list.length;

        for (const item of this.list) {
            if (this.isValidListItem(item)) {
                HTML += `<div class="item" style="width: ${itemWidth}%;">
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

    addEvents() {
        for (let i = 0; i < this.controlCircles.length; i++) {
            const circle = this.controlCircles[i];

            circle.addEventListener('click', () => {
                this.controlCircles[this.activeCircleIndex].classList.remove('active');
                this.activeCircleIndex = i;
                circle.classList.add('active');

                this.listDOM.style.marginLeft = `-${i}00%`;
            })

            // circle.addEventListener('click', (function () {
            //     this.clickCircle();
            // }).bind(this))

            // circle.addEventListener('click', () => {
            //     this.clickCircle();
            // })

            // circle.addEventListener('click', this.clickCircle.bind(this))

            // circle.addEventListener('click', () => this.clickCircle())
        }
    }

    clickCircle() {
        console.log('click circle...');
        console.log(this.selector);
    }
}

export { Carousel }