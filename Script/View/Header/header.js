import { createHeader } from './header_itils.js';
import { HeaderAction } from '../view_constants.js';
import { BoardsAction } from '../view_constants.js';

export class Header {
    constructor(onHeaderAction, onBoardAction) {
        this.cardContainer = createHeader();
        this.onHeaderAction = onHeaderAction;
        this.cardContainer.addEventListener('submit', this.onFormSubmit);
        this.cardContainer.addEventListener('click', this.onHeaderClick);
        this.cardContainer.addEventListener('click', ({ target }) => {
            if (Object.values(BoardsAction).includes(target.dataset.boardAction)) {
                onBoardAction(target.dataset.boardAction, target.name);
            }
        })
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
                const boardsList = document.getElementById('dropDownList');
                boardsList.classList.toggle('show');
                //close dropdown by any other click on display
                document.addEventListener('click', (event) => {
                    const boardsBtn = document.getElementById('dropDownBtn');
                    const withinBounderieas = event.composedPath().includes(boardsBtn);
                    if (!withinBounderieas && boardsList.classList.contains('show')) {
                        boardsList.classList.remove("show")
                    }
                })
                break;
            case HeaderAction.reload:
                let rebootUrl = `https://api.unsplash.com/photos?page=
                ${this.randomNumberReboot()}&per_page=28&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;
                this.onHeaderAction(HeaderAction.reload, rebootUrl);
        }
    }
}


