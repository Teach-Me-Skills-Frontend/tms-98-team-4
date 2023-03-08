import { createSearchInput, createBtn, createBoardItem } from '../view_utils.js';
import { AddBtnNames } from '../view_constants.js';

export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('container-sm', 'd-flex', 'justify-content-between', 'header_spacing');

    const btnLabel = createBtn(AddBtnNames.label);
    btnLabel.classList.add('btn-warning');


    const searchForm = document.createElement('form');
    searchForm.classList.add('d-flex', 'w-50');
    const searchInput = createSearchInput();

    searchForm.append(searchInput);

    const boardBtn = createBtn(AddBtnNames.Boards);
    boardBtn.classList.add('btn', 'btn-dark', 'dropdown-toggle');
    boardBtn.setAttribute('data-bs-toggle', 'dropdown');

    const boeardItem = createBoardItem();
    boardBtn.append(boeardItem);

    header.append(btnLabel, searchForm, boardBtn);

    return header;
}