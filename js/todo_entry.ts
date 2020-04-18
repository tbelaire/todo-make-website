export interface entryData {
    description: string;
    dueDate: string;
}

export class TodoEntry extends HTMLElement {
    constructor(data?: entryData) {
        super();
        // Could also create a template in js once, and set innerHtml.  That'll move it into this file.
        const template = document.getElementById('todoEntryTemplate') as HTMLTemplateElement;

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));

        if (data?.description) {
            const el = document.createElement('span');
            el.slot = "description";
            el.append(data.description);
            this.append(el);
        }
        if (data?.dueDate) {
            const el = document.createElement('span');
            el.slot = "dueDate";
            el.append(data.dueDate);
            this.append(el);
        }
    }

    get description(): string {
        return this.querySelector('[slot="description"]')?.textContent || "";
    }
    
    get dueDate(): string {
        return this.querySelector('[slot="dueDate"]')?.textContent || "";
    }
}

customElements.define('todo-entry', TodoEntry)