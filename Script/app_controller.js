import { View } from "./View/view_index.js";
import { CardModel, getData, getNewData } from "./Model/model_index.js";
import { HeaderAction } from './View/view_constants.js';
import { CardAction } from './basic_constants.js';
import { ModalForm } from './View/ModalView/ModalForm.js';


export class CardController {
    constructor(containerId) {
        this.model = new CardModel();
        this.view = new View({ containerId, onHeaderAction: this.onHeaderAction, onCardAction: this.onCardAction });
        this.modalForm = new ModalForm();
    }

    getSearch(searchURL) {
        getNewData(searchURL)
            .then(
                data => {
                    this.model.setCards(data.results);
                    this.view.renderCards(this.model.getCards());
                })
    }

    getReboot(url) {
        getNewData(url)
            .then(
                data => {
                    this.model.setCards(data);
                    this.view.renderCards(this.model.getCards());
                })
    }

    onHeaderAction = (action, payload = undefined) => {
        switch (action) {
            case HeaderAction.search:
                this.getSearch(payload);
                break;
            case HeaderAction.reload:
                this.getReboot(payload);
                break;
        }
    }

    openPhoto = (src) => {
        this.view.openPhoto(src);
    }

    openModal = (id) => {
        this.modalForm.openModal(id);
    }

    onCardAction = (action, payload) => {
        switch (action) {
            case CardAction.OpenFull:
                this.openPhoto(payload);
                break;
            case CardAction.OpenOptions:
                this.openModal(payload);
                break;
        }
    }

    initialize() {
        getData()
            .then(
                data => {
                    this.model.setCards(data);
                    this.view.renderCards(this.model.getCards());
                })
    }
}
