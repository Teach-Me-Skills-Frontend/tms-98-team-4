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
    boardDrop.append(returnToTheMainPage);
    returnToTheMainPage.textContent = `${BoardsAction.returnToTheMainPage}`;
    returnToTheMainPage.classList.add('bg-warning', 'bg-gradient', 'fs-6');

    const returnToSearch = document.createElement('a');
    returnToSearch.textContent = BoardsAction.returnToSearch;
    returnToSearch.setAttribute('data-board-action', BoardsAction.returnToSearch);
    returnToSearch.classList.add('bg-warning', 'bg-gradient', 'fs-6');
    boardDrop.append(returnToSearch);
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

        const checkBoxLabel = document.createElement('label');
        checkBoxLabel.classList.add('form-check-label');

        checkBoxLabel.textContent = causesComplains[key];
        checkBoxLabel.append(checkBoxinput)
        checkBoxContainer.append(checkBoxLabel)

        checkBoxContainerBasic.append(checkBoxContainer);
    }
    return checkBoxContainerBasic;
}

export function addSearchElements(searchURL, amount) {
    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('id', 'btn-container');

    const firstBtn = document.createElement('button');
    firstBtn.setAttribute('id', 'button_first');
    firstBtn.classList.add('button-page', 'first', 'btn', 'btn-warning');

    const prevBtn = document.createElement('button');
    prevBtn.setAttribute('id', 'button_prev');
    prevBtn.classList.add('button-page', 'prev', 'btn', 'btn-warning');

    const currBtn = document.createElement('button');
    currBtn.setAttribute('id', 'button_curr');
    currBtn.classList.add('button_curr', 'btn');

    const nextBtn = document.createElement('button');

    nextBtn.setAttribute('id', 'button_next');
    nextBtn.classList.add('button-page', 'next', 'btn', 'btn-warning');

    const lastBtn = document.createElement('button');
    lastBtn.setAttribute('id', 'button_last');
    lastBtn.classList.add('button-page', 'last', 'btn', 'btn-warning');

    btnContainer.append(firstBtn, prevBtn, currBtn, nextBtn, lastBtn);

    document.getElementById('card-container').after(btnContainer);
    document.getElementById('card-container').before(addSearchInfo(searchURL, amount));
}

export function addSearchInfo(searchURL, amount) {
    const searchInfo = document.createElement('p');
    searchInfo.setAttribute('id', 'search-info');
    searchInfo.classList.add('search-info', 'container-sm', 'd-flex', 'justify-content-evenly');

    console.log(searchURL);

    const searchQuery = searchURL.match(/(?<=per_page=28&query=)(.*)(?=)/g)[0];

    searchInfo.textContent = `${amount} pictures found for: "${searchQuery}"`;

    return searchInfo;
}

export function removeSearchElements() {
    if (document.getElementById('btn-container')) {
        document.getElementById('btn-container').remove();
        document.getElementById('search-info').remove();
    }
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
} 
