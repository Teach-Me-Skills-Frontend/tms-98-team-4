import { ModalAction, AlertDiscription } from '../view_constants.js';
import { createBtn } from '../view_utils.js';

export function createCardModal() {
    const cardModal = document.createElement('div');
    cardModal.classList.add('card-modal');

    const btnBaseModalAddBoard = createBtn(ModalAction.addboard);
    btnBaseModalAddBoard.classList.add('btn-warning', 'button-modal');
    btnBaseModalAddBoard.setAttribute('data-modal-action', `${ModalAction.addboard}`);


    const btnBaseModalComplain = createBtn(ModalAction.complain);
    btnBaseModalComplain.classList.add('btn-warning', 'button-modal');
    btnBaseModalComplain.setAttribute('data-modal-action', `${ModalAction.complain}`);
    btnBaseModalComplain.setAttribute('id', `bt-${ModalAction.complain}`);


    const btnBaseModalDelte = createBtn(ModalAction.deleteCard);
    btnBaseModalDelte.classList.add('btn-danger', 'button-modal');
    btnBaseModalDelte.setAttribute('data-modal-action', `${ModalAction.deleteCard}`);
    btnBaseModalDelte.classList.add('btn-danger', 'button-modal');
    btnBaseModalDelte.setAttribute('id', `${ModalAction.deleteCard}`);

    cardModal.append(btnBaseModalAddBoard, btnBaseModalComplain, btnBaseModalDelte);
    return cardModal;
}

export function createdalAlert() {
    const cardModal = document.createElement('div');
    cardModal.classList.add('card-modal', 'alert-modal');
    cardModal.setAttribute('id', `${ModalAction.alert}`)
    cardModal.textContent = `${AlertDiscription.createdalAlert}`;

    return cardModal;
}

export function complainAlert() {
    const cardModal = document.createElement('div');
    cardModal.classList.add('card-modal', 'alert-modal');
    cardModal.setAttribute('id', `${ModalAction.alertComplain}`)
    cardModal.textContent = `${AlertDiscription.complainAlert}`;

    return cardModal;
}

export function successAddAlert() {
    const cardModal = document.createElement('div');
    cardModal.classList.add('card-modal', 'alert-modal');
    cardModal.setAttribute('id', `${ModalAction.successAddAlert}`)
    cardModal.textContent = `${AlertDiscription.successAddAlert}`;

    return cardModal;
}

export function createClearBoardsModalEmpty() {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('clear-boards-container', 'shadow-header');
    modalContainer.setAttribute('id', 'clear-boards-container');
    modalContainer.textContent = 'All boards are empty';

    return modalContainer;
}


export function createClearBoardsModalFull() {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('clear-boards-container', 'shadow-header');
    modalContainer.setAttribute('id', 'clear-boards-container');

    const clearBoardsText = document.createElement('p');
    clearBoardsText.classList.add('clear-boards-text');
    clearBoardsText.setAttribute('id', 'clear-boards-text');
    clearBoardsText.textContent = 'Are you sure?';

    const clearBoardsBtnContainer = document.createElement('div');
    clearBoardsBtnContainer.classList.add('clear-boards-btn-container');
    clearBoardsBtnContainer.setAttribute('id', 'clear-boards-btn-container');

    const clearBoardsBtnYes = document.createElement('button');
    clearBoardsBtnYes.classList.add('btn', 'btn-success', 'button-clear');
    clearBoardsBtnYes.setAttribute('id', 'clear-boards-button-yes');
    clearBoardsBtnYes.textContent = 'Clear boards';

    const clearBoardsBtnNo = document.createElement('button');
    clearBoardsBtnNo.classList.add('btn', 'btn-danger', 'button-clear');
    clearBoardsBtnNo.setAttribute('id', 'clear-boards-button-no');
    clearBoardsBtnNo.textContent = 'Cancel';

    clearBoardsBtnContainer.append(clearBoardsBtnYes, clearBoardsBtnNo);
    modalContainer.append(clearBoardsText, clearBoardsBtnContainer);

    return modalContainer;
}
