export interface entryData {
    description: string;
    dueDate: string;
    completed?: boolean;
}

export class TodoEntry extends HTMLElement {
    private readonly shadow: ShadowRoot;
    constructor(data?: entryData) {
        super();
        // Could also create a template in js once, and set innerHtml.  That'll move it into this file.
        const template = document.getElementById('todoEntryTemplate') as HTMLTemplateElement;

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(template.content.cloneNode(true));


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
            this.completed = data!.completed!;
        }
    }

    get description(): string {
        return this.querySelector('[slot="description"]')?.textContent || "";
    }
    
    get dueDate(): string {
        return this.querySelector('[slot="dueDate"]')?.textContent || "";
    }
    
    get completed(): boolean {
        return this.completedCheckbox().checked;
    }

    set completed(checked: boolean) {
        this.completedCheckbox().checked = checked;
    }

    completedCheckbox(): HTMLInputElement {
        return this.shadow.querySelector(".completed") as HTMLInputElement;
    }

    serialize(): entryData {
        return {
            completed: this.completed,
            description: this.description,
            dueDate: this.dueDate,
        }
    }

}

customElements.define('todo-entry', TodoEntry)