import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import button from '../button/index';

import css from './style.pcss';
import template from './template.html';

class BaseView extends PolymerElement {
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

    // static get emTemplate() { 
    //     return html`<em>Some EM common thing that I don't need at all.</em>` 
    // }

    constructor() {
        super();
        this.common_part = "Here there is the common part to every view."
        this.buttonContent = "Buy me. NOW."
    }
}

customElements.define('base-view', BaseView);
