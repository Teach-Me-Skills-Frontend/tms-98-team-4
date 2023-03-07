import {createCard} from '../view_utils';

export class CardList {
    constructor (cards) {
        this.container = document.getElementById('root');
        this.container.classList.add("container-sm", "d-flex", "justify-content-between", "flex-row g-3");

        this.renderCards(cards);
    }

    renderCards = (data) => {
        this.container.innerHTML = '';
        data.forEach(picture => {
            this.container.append(createCard(cardParams));
        })
    }
}
