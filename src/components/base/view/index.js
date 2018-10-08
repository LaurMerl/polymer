import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '../item-grid/index';

import css from './style.pcss';
import template from './template.html';

class BaseView extends PolymerElement {
    constructor() {
        super();
    }

    static get is() { return 'shop-list'; }
    
    static get properties() {
        console.log(this.category);
        return {
            category: String,
            items: {
                value() {
                    return [
                        { order: 1, name: 'Carrot', title: 'Title 1', body: "Body 1", category: "vegetables" },
                        { order: 2, name: 'Drawer', title: 'Title 2', body: "Body 2", category: "fornitures" },
                        { order: 3, name: 'Cat', title: 'Title 3', body: "Body 3", category: "animals" },
                        { order: 4, name: 'Frog', title: 'Title 4', body: "Body 4", category: "animals" },
                        { order: 5, name: 'Bed', title: 'Title 5', body: "Body 5", category: "fornitures" },
                        { order: 6, name: 'Salad', title: 'Title 6', body: "Body 6", category: "vegetables" },
                    ];
                }
            }
        };
    }

    static get template() {
        return html([`<style>${css}</style> ${template}`]);
    }
}

customElements.define('base-view', BaseView);
