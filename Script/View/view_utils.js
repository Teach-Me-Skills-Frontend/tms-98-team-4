import { AddBtnNames, boardNames, HeaderAction, BoardsAction } from './view_constants.js';
import { causesComplains } from '../View/ModalView/ModalAddBan/ModalAddBan_constants.js';

export function createBtn(title, buttonProps) {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-lg');
    button.textContent = title;

    for (const key in buttonProps) {
        button.setAttribute(key, buttonProps[key]);
    }

    return button;
}

export function createSearchInput() {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('data-header-action', `${HeaderAction.search}`);
    input.setAttribute('placeholder', 'search...');
    input.classList.add('form-control', 'text-center', 'input-gap', 'rounded-pill');

    return input;
}

export function createBoard() {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('dropdown');


    const boardBtn = document.createElement('button');
    boardBtn.classList.add('btn', 'btn-outline-success', 'btn-lg');
    boardBtn.setAttribute('data-header-action', `${HeaderAction.openDropBoard}`);
    boardBtn.textContent = `${AddBtnNames.pickBoard}`;
    boardBtn.setAttribute('id', 'dropDownBtn');

    const boardDrop = document.createElement('div');
    boardDrop.classList.add('dropdown-content');
    boardDrop.setAttribute('id', 'dropDownList');

    for (const name of boardNames) {
        const boardItem = document.createElement('a');
        boardItem.setAttribute('data-board-action', BoardsAction.loadBoard);
        boardItem.setAttribute('name', `${name}`);
        boardItem.textContent = name;
        boardItem.setAttribute('id', `${name}`);

        const cleanBoard = document.createElement('a');
        cleanBoard.textContent = `${AddBtnNames.cleanboard} ${name}`;
        cleanBoard.setAttribute('data-board-action', BoardsAction.cleanBoard);
        cleanBoard.setAttribute('name', `${name}`);
        cleanBoard.classList.add('font-italic')

        boardDrop.append(boardItem, cleanBoard);
    }

    const boardItemDelete = document.createElement('a');
    boardItemDelete.textContent = AddBtnNames.deleteAllboards;
    boardItemDelete.setAttribute('data-board-action', BoardsAction.cleanBoardsCards);
    boardItemDelete.classList.add('bg-light');
    boardDrop.append(boardItemDelete)

    const returnToTheMainPage = document.createElement('a');
    returnToTheMainPage.textContent = AddBtnNames.deleteAllboards;
    returnToTheMainPage.setAttribute('data-board-action', BoardsAction.returnToTheMainPage);
    boardDrop.append(returnToTheMainPage)
    returnToTheMainPage.textContent = `${BoardsAction.returnToTheMainPage}`;
    returnToTheMainPage.classList.add('bg-warning', 'bg-gradient', 'fs-6')

    boardContainer.append(boardBtn, boardDrop);
    return boardContainer;
}

export function createCheckBoxesСomplain(causes) {
    const checkBoxContainerBasic = document.createElement('div');
    checkBoxContainerBasic.setAttribute('id', 'check-boxes')
    for (const key in causesComplains) {
        const checkBoxContainer = document.createElement('div');
        checkBoxContainer.classList.add('form-check', 'check-gap');
        checkBoxContainer.setAttribute('id', 'modalComplainCheckBox');

        const checkBoxinput = document.createElement('input');
        checkBoxinput.classList.add('form-check-input');
        checkBoxinput.setAttribute('type', 'checkbox');
        // checkBoxinput.setAttribute('id', 'flexCheckDefault');

        const checkBoxLabel = document.createElement('label');
        checkBoxLabel.classList.add('form-check-label');
        // checkBoxLabel.setAttribute('id', 'flexCheckDefault');

        checkBoxLabel.textContent = causesComplains[key];
        checkBoxContainer.append(checkBoxinput, checkBoxLabel)

        checkBoxContainerBasic.append(checkBoxContainer);
    }
    return checkBoxContainerBasic;
}


