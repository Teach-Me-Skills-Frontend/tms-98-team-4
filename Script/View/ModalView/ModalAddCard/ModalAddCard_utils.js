import { boardNames } from "../../view_constants.js";
import { ModalAction } from '../../view_constants.js';
import { createBtn } from '../../view_utils.js';


export function createBoardModal(){
  const boardModal = document.createElement('div');
  boardModal.classList.add('card-modal', 'container-xl', 'bg-boardModal');

  const modalDescription = document.createElement('p');
  modalDescription.classList.add('d-flex');
  modalDescription.textContent = 'Choose the board to add';

  const boardDrop = document.createElement('div');
    boardDrop.classList.add('btn-group-vertical','gap-3' );
    boardDrop.setAttribute('id', 'dropDownList');

    for (const name of boardNames) {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('d-flex', 'flex-column', );

        const buttonItem = document.createElement('button');
        buttonItem.classList.add('btn', 'btn-outline-success');
        buttonItem.textContent = name;

        buttonContainer.append(buttonItem)
        boardDrop.append(buttonContainer)

        // const checkBoxContainer = document.createElement('div');
        // checkBoxContainer.classList.add('form-check', 'check-gap');
        // checkBoxContainer.setAttribute('id', 'modalComplainCheckBox');

        // const checkboxInput = document.createElement('input');
        // checkboxInput.classList.add('form-check-input');
        // checkboxInput.setAttribute('type', 'checkbox');

        // const checkboxLabel = document.createElement('label');
        // checkboxLabel.classList.add('form-check-label');

        // checkboxLabel.textContent = name;
        
        // checkBoxContainer.append(checkboxInput,checkboxLabel)
        // boardDrop.append(checkBoxContainer)

    }

    const containerAddBtns = document.createElement('div', 'd');
    containerAddBtns.classList.add('container-sm', 'd-grid', 'grid-column', 'justify-content-center','gap-2');
    containerAddBtns.setAttribute('id', 'complainBtns');

    const btnCancel = createBtn(ModalAction.cancel);
    btnCancel.classList.add('btn-outline-danger');
    btnCancel.setAttribute('data-modal-action', `${ModalAction.cancelAdd}`);

    containerAddBtns.append(btnCancel)

    boardModal.append(modalDescription,boardDrop,containerAddBtns);
  
  return boardModal;
}