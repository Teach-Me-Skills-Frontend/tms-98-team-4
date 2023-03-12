import { createHeader } from './header_itils.js';
import { randomPage, getRandomArbitrary } from '../../Model/models_utils.js';
import { AddBtnNames, boardnames, datasetNames, HeaderAction } from '../view_constants.js';
import { numberLoadCards } from '../../Model/model_constants.js';



export class Header {
    constructor({ onHeaderSearch, onHeaderReboot }) {
        this.cardContainer = createHeader();
        this.onHeaderSearch = onHeaderSearch;
        console.log(onHeaderSearch);
        this.onHeaderReboot = onHeaderReboot;
        console.log(typeof onHeaderReboot);
        this.cardContainer.addEventListener('submit', this.onFormSubmit);
        this.cardContainer.addEventListener('click', this.onHeaderClick);

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

    onHeaderClick = (event) => {
        const {
            target: {
                dataset: { action },
            },
        } = event;
        switch (action) {
            case HeaderAction.openBoardsBtn:
                const boards = event.target.closest('.dropdown');
                boards.children[1].classList.toggle('show');
                break;
            case HeaderAction.reboot:
                console.log('hi reboot');
                console.log(getRandomArbitrary(1, 250));
                console.log(`https://api.unsplash.com/photos?page=10&per_page=${getRandomArbitrary(1, 250)}&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`);
                this.onHeaderReboot(`https://api.unsplash.com/photos?page=10&per_page=${getRandomArbitrary(1, 250)}&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`);
        }
    }
}


