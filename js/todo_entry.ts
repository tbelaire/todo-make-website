export interface entryData {
    description: string;
    dueDate: string;
    completed?: boolean;
}

export class TodoEntry extends HTMLElement {
    constructor(data?: entryData) {
        super();
        // Could also create a template in js once, and set innerHtml.  That'll move it into this file.
        const template = document.getElementById('todoEntryTemplate') as HTMLTemplateElement;

        this.attachShadow({mode: 'open'})
            .appendChild(template.content.cloneNode(true));

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
        if (data?.completed) {
            this.completed = data.completed;
        }
    }

    get description(): string {
        return this.querySelector('[slot="description"]')?.textContent || "";
    }
    
    get dueDate(): string {
        return this.querySelector('[slot="dueDate"]')?.textContent || "";
    }

    get completed(): boolean {
        return this.getCompleted().checked;
    }

    set completed(newValue: boolean) {
        this.getCompleted().checked = newValue;
    }

    serialize(): entryData {
        return {
            description: this.description,
            dueDate: this.dueDate,
            completed: this.completed,
        };
    }

    getCompleted(): HTMLInputElement {
        return this.shadowRoot!.getElementById('completed') as HTMLInputElement;
    }
}

customElements.define('todo-entry', TodoEntry)