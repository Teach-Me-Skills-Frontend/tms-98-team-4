export function createModalButton (dataset, datavalue, textContent) {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-warning', 'button-modal');
    button.setAttribute(`data-${dataset}`, datavalue);
    button.textContent = textContent;
    return button;
}

export function createCardModal () {
    const cardModal = document.createElement('div');
    cardModal.classList.add('card-modal');
    cardModal.setAttribute('id', 'card-modal');
    cardModal.append(createModalButton('data-add-to-board', 'addToBoard', 'Add to board'));
    cardModal.append(createModalButton('data-send-complain', 'sendComplain', 'Complain'));
    return cardModal;
}
