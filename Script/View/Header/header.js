import { createHeader } from './header_itils.js';
import { randomPage } from '../../Model/models_utils.js';
import { AddBtnNames, boardnames, datasetNames } from '../view_constants.js';



export class Header {
    constructor({ onHeaderAction }) {
        this.cardContainer = createHeader();
        this.onHeaderAction = onHeaderAction;
        this.cardContainer.addEventListener('submit', this.onFormSubmit);
        this.cardContainer.addEventListener('click', this.onFormClick);
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        const { value } = this.cardContainer.children[1].firstChild;
        console.log(this.cardContainer.children[1].firstChild);
        console.log(value);

        const formattedValue = value.trim();

        if (formattedValue) {
            console.log(this.onHeaderAction(formattedValue));
            this.cardContainer.children[1].reset();
        }
    };
    onFormClick(event) {
        const {
            target: {
                dataset: { action },
            },
        } = event;

        switch (action) {
            case "showBoards":
                const boards = event.target.closest('.dropdown');
                boards.children[1].classList.toggle('show');
                break;
        }
    }
}


