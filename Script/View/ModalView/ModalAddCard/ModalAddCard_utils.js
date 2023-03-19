import { boardNames } from "../../view_constants.js";
import { ModalAction } from '../../view_constants.js';
import { createBtn } from '../../view_utils.js';


export function createBoardModal() {
    const boardModal = document.createElement('div');
    boardModal.classList.add('card-modal', 'container-xl', 'bg-complainModal');

    const modalDescription = document.createElement('p');
    modalDescription.classList.add('d-flex', 'text-align-center');
    modalDescription.textContent = 'Choose the board to add';

    const modalBoardContainer = document.createElement('div');
    modalBoardContainer.classList.add('btn-group-vertical', 'gap-3', 'd-flex', 'flex-column');
    modalBoardContainer.setAttribute('id', 'addBtns');

    for (const name of boardNames) {
        const buttonItem = document.createElement('button');
        buttonItem.classList.add('btn', 'btn-outline-success');
        buttonItem.setAttribute('data-modal-action', 'addCardBoard');
        buttonItem.setAttribute('value', name);
        buttonItem.textContent = name;
        modalBoardContainer.append(buttonItem);
    }

    const btnCancel = createBtn(ModalAction.cancel);
    btnCancel.classList.add('btn-outline-danger');
    btnCancel.setAttribute('data-modal-action', `${ModalAction.cancelAdd}`);
    btnCancel.textContent = 'Return';
    modalBoardContainer.append(btnCancel);
    boardModal.append(modalDescription, modalBoardContainer);

    return boardModal;
}