import { createModalButton } from '../ModalView/ModalView_utils.js'

export class ModalForm {
    constructor() {
        this.cardModal = document.createElement('div');
        this.cardModal.classList.add('card-modal');
        this.cardModal.append(createModalButton('data-add-to-board', 'addToBoard', 'Add to board'));
        this.cardModal.append(createModalButton('data-send-complain', 'sendComplain', 'Complain'));
    }

    openModal = (cardId) => {
        const card = document.getElementById(cardId);
        this.cardModal.setAttribute('id', `${cardId}-modal`);
        card.append(this.cardModal);
        this.closeModal();
    }

    closeModal = () => {
        this.cardModal.addEventListener('mouseleave', () => {
            this.cardModal.remove();
        });
    }
}