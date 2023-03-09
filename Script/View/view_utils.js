//написать функцию прорисовки кнопки, общий вид для всех кнопок в приложении//
//написать функцию прорисовки модального окна, общий вид для всех модалок в приложении//
import { AddBtnNames, boardnames } from './view_constants.js';

export function createBtn(title, buttonProps) {
    const button = document.createElement('button');
    button.classList.add('btn');
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
    input.setAttribute('name', 'input');
    input.classList.add('form-control', 'text-center');

    return input;
}


export function createBoard() {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('dropdown');

    const boardBtn = document.createElement('button');
    boardBtn.classList.add('dropbtn');
    boardBtn.textContent = `${AddBtnNames.pickBoard}`;

    //временно событие, добавлю через метод в class header
    boardBtn.addEventListener('click', () => {
        boardDrop.classList.toggle('show');
    })


    boardBtn.setAttribute('name', 'boardPick');
    boardBtn.setAttribute('data-action', 'showBoards');

    const boardDrop = document.createElement('div');
    boardDrop.classList.add('dropdown-content');
    boardDrop.setAttribute('id', 'myDropdown');

    console.log(document.getElementById('myDropdown'));


    for (const name of boardnames) {
        const boardItem = document.createElement('a');
        boardItem.setAttribute('href', '#');
        boardItem.textContent = name;
        boardDrop.append(boardItem);
    }

    boardContainer.append(boardBtn, boardDrop);
    return boardContainer;
}





