import { ModalAction, AddBtnNames, GropuInfoBoxes } from '../view_constants.js';
import { ComplainModal } from '../ModalView/ModalAddBan/ModalComplain.js';
import { createCardModal, createdalAlert, complainAlert, successAddAlert, createClearBoardsModalEmpty, createClearBoardsModalFull } from '../ModalView/ModalView_utils.js';
import { BoardModal } from './ModalAddCard/ModalAddCard.js';
import { CardModel } from '../../Model/model_index.js';


export class ModalForm {
    constructor(onModalAction) {
        this.modalComplain = new ComplainModal(onModalAction);
        this.boardModal = new BoardModal(onModalAction)
        this.cardModal = createCardModal();
        this.model = new CardModel();
        this.clearBoardsModalFull = createClearBoardsModalFull();
        this.clearBoardsModalEmpty = createClearBoardsModalEmpty();
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
        const btn = document.getElementById(`${ModalAction.deleteCard}`);
        const btnComplain = document.getElementById(`bt-${ModalAction.complain}`)
        if (!document.getElementById(`${GropuInfoBoxes.boardInfo}`)) {
            btn.style.display = 'none';
            btnComplain.style.display = 'block';
        } else {
            btnComplain.style.display = 'none';
            if (this.model.getLocal().find(element => element.id === cardId)) {
                btn.style.display = 'block';
            }
        }
    }

    closeModal = () => {
        this.cardModal.addEventListener('mouseleave', () => {
            this.cardModal.remove();
        });
    }

    openModalAlert = (cardId) => {
        const card = document.getElementById(cardId);
        card.append(createdalAlert());
        function closeModalAlert() {
            document.getElementById(`${ModalAction.alert}`).remove();
        }
        setTimeout(closeModalAlert, 1000);
    }

    openAddedAlert = (cardId) => {
        const card = document.getElementById(cardId);
        card.append(successAddAlert());
        function closeModalAlert() {
            document.getElementById(`${ModalAction.successAddAlert}`).remove();
        }
        setTimeout(closeModalAlert, 1000);
    }

    openComplainAlert = (cardId) => {
        const card = document.getElementById(cardId);
        card.append(complainAlert());
        function closeModalAlert() {
            document.getElementById(`${ModalAction.alertComplain}`).remove();
        }
        setTimeout(closeModalAlert, 1000);
    }

    clearCheckBoxes = () => {
        [...document.getElementsByClassName('form-check-input')].forEach(item => { item.checked = false })
    }

    closeModalBoard = () => {
        this.boardModal.modalBoardContainer.remove();
    }

    openComplainModal = (cardId) => {
        this.cardModal.remove();
        const card = document.getElementById(cardId);
        card.append(this.modalComplain.modalComplainContainer);
        const btns = document.getElementById(`${AddBtnNames.groupBtnsComplain}`);
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
        } else { this.openComplainAlert(cardId) };
    }

    openBoardModal = (cardId) => {
        this.cardModal.remove();
        const card = document.getElementById(cardId);
        card.append(this.boardModal.modalBoardContainer);
        const btns = document.getElementById(`${AddBtnNames.groupBtnsAdd}`);
        const children = btns.childNodes;
        for (let i = 0; i < children.length; i += 1) {
            children[i].setAttribute('name', `${cardId}`)
        }
    }

    closeAddModal = () => {
        this.boardModal.modalBoardContainer.remove();
    }

    openClearBoardsModalFull = () => {
        const header = document.getElementById('header');
        header.after(this.clearBoardsModalFull);

        document.addEventListener('mouseup', (event) => {
            const withinBounderieas = event.composedPath().includes(this.clearBoardsModalFull);
            if (!withinBounderieas) {
                this.clearBoardsModalFull.remove();
            }
        })
    }

    openClearBoardsModalEmpty = () => {
        const header = document.getElementById('header');
        header.after(this.clearBoardsModalEmpty);
        setTimeout(() => {
            this.clearBoardsModalEmpty.remove();
        }, '2000');
    }

    openClearBoardsModalFull = () => {
        const header = document.getElementById('header');
        header.after(this.clearBoardsModalFull);

        document.addEventListener('mouseup', (event) => {
            const withinBounderieas = event.composedPath().includes(this.clearBoardsModalFull);
            if (!withinBounderieas) {
                this.clearBoardsModalFull.remove();
            }
        })
    }

    openClearBoardsModalEmpty = () => {
        const header = document.getElementById('header');
        header.after(this.clearBoardsModalEmpty);
        setTimeout(() => {
            this.clearBoardsModalEmpty.remove();
        }, '3000');
    }
}
