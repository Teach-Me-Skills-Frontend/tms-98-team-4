import { createBoardModal } from './ModalAddCard_utils.js';
import { ModalAction } from "../../view_constants.js";

export class BoardModal {
    constructor(onModalAction) {
        this.modalBoardContainer = document.createElement('div');
        this.modalBoardContainer.append(createBoardModal());

        this.modalBoardContainer.addEventListener('click', ({ target }) => {
            if (Object.values(ModalAction).includes(target.dataset.modalAction)) {
                onModalAction(target.dataset.modalAction, target.value, target.name)
            }
        })
    }
}