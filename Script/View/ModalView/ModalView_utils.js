import { ModalAction } from '../view_constants.js';
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

    const btnBaseModalDelte = createBtn(ModalAction.deleteCard);
    btnBaseModalDelte.classList.add('btn-danger', 'button-modal');
    btnBaseModalDelte.setAttribute('data-modal-action', `${ModalAction.deleteCard}`);
    btnBaseModalDelte.classList.add('btn-danger', 'button-modal');
    // btnBaseModalDelte.setAttribute('disabled', 'disabled');
    btnBaseModalDelte.setAttribute('id', `${ModalAction.deleteCard}`);

    cardModal.append(btnBaseModalAddBoard, btnBaseModalComplain, btnBaseModalDelte);
    return cardModal;
}
