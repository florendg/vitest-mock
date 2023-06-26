import {html,css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement("app-main")
export class Index extends LitElement {

    static styles = css `
      header {
        grid-area: header;
        background-color: navy;
        color: white;
      }

      main {
        grid-area: main;
        background-color: lightblue;
      }

      aside {
        grid-area: sidebar;
        background-color: lightcoral;
      }

      footer {
        grid-area: footer;
        background-color: lightseagreen;
      }
    `
    render() {
        return html`
            <header>Header</header>
            <aside>SideBar</aside>
            <main>
                <app-main-component></app-main-component>
            </main>
            <footer>Footer</footer>
        `;
    }
}