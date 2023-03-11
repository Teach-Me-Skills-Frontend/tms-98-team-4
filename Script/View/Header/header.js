import { createHeader } from './header_itils.js';
import { randomPage } from '../../Model/models_utils.js';
import { AddBtnNames, boardnames, datasetNames } from '../view_constants.js';



export class Header {
    constructor({ onHeaderSearch }) {
        this.cardContainer = createHeader();
        this.onHeaderSearch = onHeaderSearch;
        this.cardContainer.addEventListener('submit', this.onFormSubmit);
        this.cardContainer.addEventListener('click', this.onFormClick);
        console.log(this.searchData);
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        const { value } = this.cardContainer.children[1].firstChild;
        console.log(value);

        const formattedValue = value.trim();
        const searchURL = `https://api.unsplash.com/search/photos?page=${randomPage}&query=${formattedValue}&per_page=30&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;
        if (formattedValue) {
            this.onHeaderSearch(searchURL);
            this.cardContainer.children[1].reset();
        }
    }

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


