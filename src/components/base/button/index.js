import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

class Button extends PolymerElement {
    static get properties() {
        return {
            content: {
                Type: String,
            },
            size: {
                Type: String,
            }
        };
    };

    static get template() {
        return html([`<style>${css}</style> ${template}`]);
    }

    constructor() {
        super();
    }
}

customElements.define('button-blue', Button);
