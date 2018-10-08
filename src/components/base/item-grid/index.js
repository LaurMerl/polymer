import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';
import button from '../button/index';

class ItemGrid extends PolymerElement {
    static get properties() {
        return {
            name: {
                Type: String,
            },
            order: {
                Type: String,
            },
            title: {
                Type: String,
            },
            body: {
                Type: String,
            },
            common_part:  {
                Type: String,
            }
        };
    };

    static get template() {
        return html([`<style>${css}</style> ${template}`]);
    }
    
    constructor() {
        super();
        this.common_part = "Here there is the common part to every view."
        this.buttonContent = "Buy me. NOW."
    }
}

customElements.define('item-grid', ItemGrid);
