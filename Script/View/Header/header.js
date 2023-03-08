import { createHeader } from './header_itils.js';


export class Header {
    constructor({ onTaskAdd }) {
        this.form = createHeader();
        this.onTaskAdd = onTaskAdd;

        this.form.addEventListener('submit', this.onFormSubmit);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { value } = this.form.elements[AddFormNames.TaskInput];

        const formattedValue = value.trim();

        if (formattedValue) {
            this.onTaskAdd(formattedValue);
            this.form.reset();
        }
    };
}
