import { url } from './models_utils.js';

export function getData() {
    return fetch(url)
        .then((response) => response.json())
        .catch(err => alert(err))
}

export function getNewData(url) {
    return fetch(url)
        .then((response) => response.json())
        .catch(err => alert(err))
}

export class CardModel {
    constructor() {
        this.cards = [];
        this.cardContainer = document.querySelectorAll('div');
    }

    setCards(cards) {
        this.cards = cards;
    }

    getCards() {
        return this.cards.slice();
    }

}





