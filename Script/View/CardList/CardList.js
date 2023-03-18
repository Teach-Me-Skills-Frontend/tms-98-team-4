import { createCard } from './CardList_utils.js';
import { CardAction } from '../../basic_constants.js';

export class CardList {
  constructor(onCardAction) {
    this.cardContainer = document.createElement('div');
    this.cardContainer.setAttribute('id', 'card-container');
    this.cardContainer.classList.add(
      'container-sm', 'd-flex', 'flex-wrap', 'justify-content-evenly', 'flex-row', 'g-2'
    );
    this.cardContainer.addEventListener('click', ({ target }) => {
      if (Object.values(CardAction).includes(target.dataset.cardAction) && target.hasAttribute('src')) {
        onCardAction(target.dataset.cardAction, target.src);
      } else if (Object.values(CardAction).includes(target.dataset.cardAction)) {
        onCardAction(target.dataset.cardAction, target.id);
      }
    });
  }

  renderCards = (cards) => {
    this.cardContainer.innerHTML = '';
    cards.forEach((picture) => {
      this.cardContainer.append(
        createCard(picture, { 'data-card-action': CardAction.OpenFull })
      );
    });
  };

  // renderBtnAdded = (id) =>{
  //   const card = document.getElementById(`${id}`);   
  // }

  openPhoto = (src) => {
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal-div');
    const root = document.getElementById('root');
    root.append(modalDiv);

    const fullPhoto = document.createElement('img');
    fullPhoto.setAttribute('src', src);
    modalDiv.append(fullPhoto);

    const closeBtn = document.createElement('i');
    closeBtn.setAttribute('class', 'fas fa-times close-button');

    closeBtn.addEventListener('click', (e) => {
      modalDiv.remove();
    });
    modalDiv.addEventListener('click', (e) => {
      modalDiv.remove();
    });

    modalDiv.append(fullPhoto, closeBtn);
  };
}
