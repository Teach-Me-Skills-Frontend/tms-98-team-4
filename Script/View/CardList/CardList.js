import { createCard } from './CardList_utils.js';
import { getData } from '../../Model/model_index.js';


export class CardList {
    constructor() {
        // this.container = document.getElementById('card-container');
        // this.container.classList.add("container-sm", "d-flex", "flex-wrap", "justify-content-between", "flex-row", "g-3");
        this.data = getData();
    }


}