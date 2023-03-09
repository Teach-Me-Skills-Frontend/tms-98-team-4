import { url } from './models_utils.js'


export function getData() {
    return fetch(url)
            .then((response) => response.json());
}

export class CardModel {
    constructor(){
        const cards = [];
    }

    setCards(cards){
        this.cards = cards;
    }
    
    getCards() {
        return this.cards.slice();
    }
}