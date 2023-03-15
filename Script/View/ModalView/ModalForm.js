import { ModalAction } from '../view_constants.js';
import { ComplainModal } from '../ModalView/ModalAddBan/ModalComplain.js';
import { createCardModal } from '../ModalView/ModalView_utils.js';


export class ModalForm {
    constructor(onModalAction) {
        this.modalComplain = new ComplainModal(onModalAction);
        this.cardModal = createCardModal();
        this.cardModal.addEventListener('click', ({ target }) => {
            if (Object.values(ModalAction).includes(target.dataset.modalAction)) {
                console.log(target.name);
                onModalAction(target.dataset.modalAction, target.name);
            }
        })

    }

    openModal = (cardId) => {
        const card = document.getElementById(cardId);
        console.log(card);
        this.cardModal.setAttribute('id', `${cardId}`);
        const children = this.cardModal.children;
        children[0].setAttribute('name', `${cardId}`);
        children[1].setAttribute('name', `${cardId}`);
        card.append(this.cardModal);
        this.closeModal()
    }

    closeModal = () => {
        this.cardModal.addEventListener('mouseleave', () => {
            this.cardModal.remove();
        });
    }

    openComplainModal = (cardId) => {
        this.cardModal.remove();
        const card = document.getElementById(cardId);
        card.append(this.modalComplain.modalComplainContainer);
        const btns = document.getElementById('complainBtns');
        const children = btns.children;
        children[0].setAttribute('name', `${cardId}`);
        children[1].setAttribute('name', `${cardId}`);
    }
    closeComplainModal = () => {
        console.log('hello close')
        this.modalComplain.modalComplainContainer.remove();
    }

    sendComplain = (cardId) => {
        console.log(cardId);
        const card = document.getElementById(`${cardId}`);
        console.log(card);
        card.remove();
    }

}