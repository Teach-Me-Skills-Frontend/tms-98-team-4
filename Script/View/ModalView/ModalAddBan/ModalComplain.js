import { createComplainModal } from '../ModalAddBan/ModalComplain_utils.js';
import { ModalAction } from '../../view_constants.js';


export class ComplainModal {
    constructor(onModalAction) {
        this.modalComplainContainer = document.createElement('div');
        this.modalComplainContainer.append(createComplainModal());

        this.modalComplainContainer.addEventListener('click', ({ target }) => {
            if (Object.values(ModalAction).includes(target.dataset.modalAction)) {
                onModalAction(target.dataset.modalAction, target.name);
            }
        })
    }



}


