import { createSearchInput, createBtn, createBoard } from '../view_utils.js';
import { HeaderAction } from '../view_constants.js';
import { AddBtnNames } from '../view_constants.js';

export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('container-sm', 'd-flex', 'justify-content-between', 'header_spacing');

    const btnLabel = createBtn(AddBtnNames.label);
    btnLabel.classList.add('btn-warning');
    btnLabel.setAttribute('data-action', `${HeaderAction.reboot}`);


    const searchForm = document.createElement('form');
    searchForm.classList.add('d-flex', 'w-50');
    const searchInput = createSearchInput();

    searchForm.append(searchInput);

    const boardDropContainer = createBoard();

    header.append(btnLabel, searchForm, boardDropContainer);

    return header;
}