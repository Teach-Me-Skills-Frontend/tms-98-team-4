import { createCard } from './CardList_utils.js';
import { CardAction } from '../../basic_constants.js'

export class CardList {
    constructor(cards) {
        this.cardContainer = document.createElement('div');
        this.cardContainer.setAttribute('id', 'card-container');
        this.cardContainer.classList.add("container-sm", "d-flex", "flex-wrap", "justify-content-between", "flex-row", "g-3");
    }

    renderCards = (cards) => {
        this.cardContainer.innerHTML = '';
        cards.forEach(picture => {
            this.cardContainer.append(createCard(picture, {'data-card-action': CardAction.openFull}));
        })
    }
}