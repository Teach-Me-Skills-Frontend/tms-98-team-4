import { createCard } from './CardList_utils.js';
import { CardAction } from '../../basic_constants.js'

export class CardList {
    constructor(cards, onCardAction) {
        this.cardContainer = document.createElement('div');
        this.cardContainer.setAttribute('id', 'card-container');
        this.cardContainer.classList.add("container-sm", "d-flex", "flex-wrap", "justify-content-between", "flex-row", "g-3");

        this.cardContainer.addEventListener('click', ({target}) => {
            if (Object.values(CardAction).includes(target.dataset.cardAction) && target.hasAttribute('src')){
                onCardAction(target.dataset.cardAction, target.src);
            }
        })
    }

    renderCards = (cards) => {
        this.cardContainer.innerHTML = '';
        cards.forEach(picture => {
            this.cardContainer.append(createCard(picture, {'data-card-action': CardAction.OpenFull}));
        })
    }


    openPhoto = (src) => {
        const modalDiv = document.createElement('div');
        modalDiv.classList.add('modal-div');
        const root = document.getElementById('root');
        root.append(modalDiv);
    
        const fullPhoto = document.createElement('img');
        fullPhoto.setAttribute('src', src);
        modalDiv.append(fullPhoto);
    
        const closeBtn = document.createElement("i");
        closeBtn.setAttribute("class", "fas fa-times close-button");
    
        closeBtn.addEventListener('click', (e) => {
            modalDiv.remove();
        });
        modalDiv.addEventListener('click', (e) => {
            modalDiv.remove();
        });
    
        modalDiv.append(fullPhoto, closeBtn);
    }
}