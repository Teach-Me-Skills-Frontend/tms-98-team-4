import { createSearchInput, createBtn, createBoard } from '../view_utils.js';
import { HeaderAction, AddBtnNames, BoardsAction } from '../view_constants.js';

export function createHeader() {
    const header = document.createElement('header');
    header.classList.add(
        'container-lg', 'd-flex', 'flex-wrap', 'justify-content-evenly', 'header_spacing', 'mb-4', 'padding-header', 'bg-light', 'rounded-pill', 'shadow-header');
    header.setAttribute('id', 'header')


    const btnLabel = createBtn(AddBtnNames.label);
    btnLabel.classList.add('btn-warning');
    btnLabel.setAttribute('data-header-action', `${HeaderAction.reload}`);

    const searchForm = document.createElement('form');
    searchForm.classList.add('d-flex', 'w-50', 'form');
    searchForm.setAttribute('data-header-action', `${HeaderAction.search}`);
    const searchInput = createSearchInput();

    searchForm.append(searchInput);

    const boardDropContainer = createBoard();

    header.append(btnLabel, searchForm, boardDropContainer);

    return header;
}

export function boardsInfo(name, numberItems) {
    const boardsInfo = document.createElement('p');
    boardsInfo.setAttribute('id', 'board-info');
    boardsInfo.setAttribute('name', name);
    boardsInfo.classList.add('search-info', 'container-sm', 'd-flex', 'justify-content-evenly');

    if (numberItems === 0) {
        boardsInfo.textContent = `you are on ${name}, but here nothing yet)`;
    } else boardsInfo.textContent = `you are on ${name} with [${numberItems}] picture(s)`;

    return boardsInfo;
}
