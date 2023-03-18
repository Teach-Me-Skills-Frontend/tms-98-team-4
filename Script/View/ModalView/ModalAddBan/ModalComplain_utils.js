import { createBtn, createCheckBoxesСomplain } from '../../view_utils.js';
import { ModalAction } from '../../view_constants.js';

export function createComplainModal() {
    const complainModal = document.createElement('div');
    complainModal.classList.add('card-modal', 'bg-complainModal', 'container-xl');

    const modalDescription = document.createElement('p');
    modalDescription.textContent = 'Describe your concern';
    modalDescription.classList.add('d-flex', 'justify-content-center', 'text-center', 'text-align-center');

    const checkBoxes = createCheckBoxesСomplain();

    const containerComplainBtns = document.createElement('div', 'd');
    containerComplainBtns.classList.add('container-sm', 'd-grid', 'grid-column', 'justify-content-center', 'gap-2');
    containerComplainBtns.setAttribute('id', 'complainBtns')

    const btnCancel = createBtn(ModalAction.cancel);
    btnCancel.classList.add('btn-outline-danger');
    btnCancel.setAttribute('data-modal-action', `${ModalAction.cancelComplain}`);
    btnCancel.textContent = 'cancel';

    const btnSend = createBtn(ModalAction.send);
    btnSend.classList.add('btn-warning');
    btnSend.setAttribute('data-modal-action', `${ModalAction.send}`);

    containerComplainBtns.append(btnCancel, btnSend);

    complainModal.append(modalDescription, checkBoxes, containerComplainBtns);

    return complainModal;

}


