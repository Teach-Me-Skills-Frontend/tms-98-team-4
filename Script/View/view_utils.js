//написать функцию прорисовки кнопки, общий вид для всех кнопок в приложении//
//написать функцию прорисовки модального окна, общий вид для всех модалок в приложении//
import { AddBtnNames, boardnames } from './view_constants.js';

export function createBtn(title, buttonProps) {
    const button = document.createElement('button');
    input.classList.add('btn');
    button.textContent = title;

    for (const key in buttonProps) {
        button.setAttribute(key, buttonProps[key]);
    }

    return button;
}

export function createSearchInput() {
    const input = document.createElement('input');
    input.setAttribute('type', 'search');
    input.setAttribute('placeholder', 'search...');
    input.classList.add('form-control', 'text-center');

    return input;
}

export function createBoardItem() {
    const boardBtn = createBtn(AddBtnNames.Boards);
    boardBtn.classList.add('btn', 'btn-dark', 'dropdown-toggle');
    boardBtn.setAttribute('data-bs-toggle', 'dropdown');

    for (const name of boardnames) {
        const board = document.createElement('li');
        boardItem.classList.add('dropdown-item');
        board.textContent = name;
        boardBtn.append(board)
    }
    return boardBtn;
}


