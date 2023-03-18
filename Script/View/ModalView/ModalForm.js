import { ModalAction } from '../view_constants.js';
import { ComplainModal } from '../ModalView/ModalAddBan/ModalComplain.js';
import { createCardModal } from '../ModalView/ModalView_utils.js';
import { BoardModal } from './ModalAddCard/ModalAddCard.js';


export class ModalForm {
    constructor(onModalAction) {
        this.modalComplain = new ComplainModal(onModalAction);
        this.boardModal = new BoardModal(onModalAction)
        this.cardModal = createCardModal();
        this.cardModal.addEventListener('click', ({ target }) => {
            if (Object.values(ModalAction).includes(target.dataset.modalAction)) {
                onModalAction(target.dataset.modalAction, target.name);
            }
        })

    }

    openModal = (cardId) => {
        const card = document.getElementById(cardId);
        this.cardModal.setAttribute('id', `${cardId}`);
        const children = this.cardModal.childNodes;
        for (let i = 0; i < children.length; i += 1) {
            children[i].setAttribute('name', `${cardId}`)
        }
        card.append(this.cardModal);
        this.closeModal();
    }

    closeModal = () => {
        this.cardModal.addEventListener('mouseleave', () => {
            this.cardModal.remove();
        });
    }

    clearCheckBoxes = () => {
        [...document.getElementsByClassName('form-check-input')].forEach(item => { item.checked = false })
    }

    openComplainModal = (cardId) => {
        this.cardModal.remove();
        const card = document.getElementById(cardId);
        card.append(this.modalComplain.modalComplainContainer);
        const btns = document.getElementById('complainBtns');
        const children = btns.childNodes;
        for (let i = 0; i < children.length; i += 1) {
            children[i].setAttribute('name', `${cardId}`)
        }
    }
    closeComplainModal = () => {
        this.clearCheckBoxes();
        this.modalComplain.modalComplainContainer.remove();
    }

    sendComplain = (cardId) => {
        const card = document.getElementById(`${cardId}`);
        if ([...document.getElementsByClassName('form-check-input')].find(item => { return item.checked })) {
            this.clearCheckBoxes();
            card.remove();
        } else { alert('Choose a cause of your complaint') }
    }

    openBoardModal = (cardId) => {
        this.cardModal.remove();
        const card = document.getElementById(cardId);
        card.append(this.boardModal.modalBoardContainer);
        const btns = document.getElementById('addBtns');
        const children = btns.childNodes;
        for (let i = 0; i < children.length; i += 1) {
            children[i].setAttribute('name', `${cardId}`)
        }
    }

    closeAddModal = () => {
        console.log('hello close');
        this.boardModal.modalBoardContainer.remove();
    }
}