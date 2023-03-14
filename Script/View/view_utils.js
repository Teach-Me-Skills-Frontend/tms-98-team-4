import { AddBtnNames, boardNames, HeaderAction } from './view_constants.js';

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
    input.classList.add('form-control', 'text-center', 'input-gap');

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
        boardItem.setAttribute('href', '#');
        boardItem.textContent = name;
        boardDrop.append(boardItem);
    }

    boardContainer.append(boardBtn, boardDrop);
    return boardContainer;
}






