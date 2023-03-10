import { url } from './models_utils.js'



export function getData() {
    return fetch(url)
        .then((response) => response.json());
}

export function getDataSearch(urls) {
    return fetch(urls)
        .then((response) => response.json());
}

export class CardModel {
    constructor() {
        const cards = [];
    }

    setCards(cards) {
        this.cards = cards;
    }

    getCards() {
        return this.cards.slice();
    }
    createCard(searchCard) {
        getDataSearch(`https://api.unsplash.com/search/photos?page=${randomPage}&query=${searchCard}&per_page=30&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`)
    };
}