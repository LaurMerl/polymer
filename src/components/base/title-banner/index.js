
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

class TitleBanner extends PolymerElement {
    static get properties() {
        return {
            title: {
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

customElements.define('title-banner', TitleBanner);
