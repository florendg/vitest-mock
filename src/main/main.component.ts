import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {store} from "../store/store.ts";
@customElement("app-main-component")
export class MainComponent extends LitElement {

    todos=  store.getState().todos;
    subscribtion: any;

    connectedCallback() {
        super.connectedCallback();
        this.subscribtion = store.subscribe(() => {
            this.todos = store.getState().todos;
            this.requestUpdate();
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.subscribtion().unsubscribe();
    }


    render() {
        return html`<div>Hello Main</div>
        <ul>
            ${this.todos.map((todo:any) => html`<li>${todo.title}</li>`)}
        </ul>
        <button type="button" @click="${this.addItem}">Add Item</input>`
    }

    addItem(_event: Event): void {
        console.log('add item');
        store.dispatch({type: 'todos/addTodo', payload: {title: 'test'}});
    }
}