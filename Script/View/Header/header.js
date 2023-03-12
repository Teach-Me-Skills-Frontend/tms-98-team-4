import { createHeader } from './header_itils.js';
import { HeaderAction } from '../view_constants.js';

export class Header {
    constructor(onHeaderAction) {
        this.cardContainer = createHeader();
        this.onHeaderAction = onHeaderAction;
        this.cardContainer.addEventListener('submit', this.onFormSubmit);
        this.cardContainer.addEventListener('click', this.onHeaderClick);
    }

    randomNumberReboot() {
        return Math.floor(Math.random() * 334);
    }

    randomNumberSearch() {
        return Math.floor(Math.random() * 100);
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        const { value } = this.cardContainer.children[1].firstChild;
        const formattedValue = value.trim();
        let searchURL = `https://api.unsplash.com/search/photos?page=
        ${this.randomNumberSearch()}&query=${formattedValue}
        &per_page=28&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;
        if (formattedValue) {
            this.onHeaderAction(HeaderAction.search, searchURL);
            this.cardContainer.children[1].reset();
        }
    }

    onHeaderClick = (event) => {
        const {
            target: {
                dataset: { headerAction },
            },
        } = event;
        switch (headerAction) {
            case HeaderAction.openDropBoard:
                const boards = event.target.closest('.dropdown');
                boards.children[1].classList.toggle('show');
                break;
            case HeaderAction.reload:
                let rebootUrl = `https://api.unsplash.com/photos?page=
                ${this.randomNumberReboot()}&per_page=28&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;
                this.onHeaderAction(HeaderAction.reload, rebootUrl);
        }
    }
}


