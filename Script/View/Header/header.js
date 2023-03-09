import { createHeader } from './header_itils.js';


export class Header {
    constructor() {
        this.cardContainer = createHeader();
        // this.onInputSearch = onInputSearch;
        // this.form.addEventListener('submit', this.onFormSubmit);
        // this.cardContainer.addEventListener('submit', this.onFormSubmit);
        this.cardContainer.addEventListener('click', this.onBoards);
    }

    // onBoards = (event) => {
    //     if (event.target.dataset.action === "showBoards") {
    //         this.cardContainer.childNodes.classList.toggle('show');
    //     }
    // }
}

