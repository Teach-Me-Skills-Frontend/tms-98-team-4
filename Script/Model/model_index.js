import { url } from './models_utils.js';
import { CardView } from "../View/view_index.js";
import { createCard } from '../View/CardList/CardList_utils.js';


export function getData() {
    return fetch(url)
        .then((response) => response.json())
        .catch(err => alert(err))
}

export function getDataSearch(urls) {
    return fetch(urls)
        .then((response) => response.json())
        .catch(err => alert(err))
}

export class CardModel {
    constructor() {
        const cards = [];
        this.cardContainer = document.querySelectorAll('div');
    }

    setCards(cards) {
        this.cards = cards;
    }

    getCards() {
        return this.cards.slice();
    }

    // getDataSearch(urls) {
    //     return fetch(urls)
    //         .then((response) => response.json());
    // }

    // createCard(urls) {
    //     console.log(urls);
    //     this.getDataSearch(urls)
    //         .then(data => {
    //             console.log(data);
    //             this.cardContainer.innerHTML = '';
    //             console.log(this.cardContainer);
    //             data.results.forEach(picture => {
    //                 this.cardContainer.append(createCard(picture))
    //             });
    //         })
    // }
}





