import { View } from "./View/view_index.js";
import { CardModel, getData, getNewData } from "./Model/model_index.js";
import { HeaderAction } from './View/view_constants.js';
import { CardAction } from './basic_constants.js';
import { ModalAction } from './View/view_constants.js';
import { BoardsAction } from './View/view_constants.js';
import { ModalForm } from './View/ModalView/ModalForm.js';
import { LocalStorageKey } from './Model/model_index.js';

export class CardController {
    constructor(containerId) {
        this.model = new CardModel();
        this.view = new View({ containerId, onHeaderAction: this.onHeaderAction, onCardAction: this.onCardAction, onBoardAction: this.onBoardAction });
        this.modalForm = new ModalForm(this.onModalAction);
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

    onModalAction = (action, payload = undefined, id = undefined) => {
        switch (action) {
            case ModalAction.complain:
                this.openComplainModal(payload);
                break;
            case ModalAction.cancelComplain:
                this.closeComplainModal(payload);
                break;
            case ModalAction.send:
                this.addComplaint(LocalStorageKey.boardsForbidden, payload);
                this.sendComplain(payload);
                break;
            case ModalAction.addboard:
                this.openBoardModal(payload);
                break;
            case ModalAction.cancelAdd:
                this.closeAddModal(payload);
                break;
            case ModalAction.addCardBoard:
                this.addCardBoard(payload, id);
                break;
        }
    }

    openBoardModal = (id) => {
        this.modalForm.openBoardModal(id)
    }

    closeAddModal = () => {
        console.log('hello app')
        this.modalForm.closeAddModal();
    }


    onBoardAction = (action, payload = undefined) => {
        switch (action) {
            case BoardsAction.loadBoard:
                this.loadBoard(payload);
                break;
            case BoardsAction.cleanBoardsCards:
                this.refreshLocal();
                break;
            case BoardsAction.returnToTheMainPage:
                this.restartMain();
                break;
            case BoardsAction.cleanBoard:
                this.cleanBoard(payload);
                break;
        }
    }


    restartMain = () => {
        this.initialize();
    }

    refreshLocal = () => {
        if (confirm("Are you sure?")) {
            this.model.refreshLocal();
            this.initialize();
        } else {
            return;
        }
    }

    cleanBoard = (name) => {
        this.model.cleanBoard(name)
    }

    loadBoard = (name) => {
        if (this.model.getLocal().find(element => element.nameBoard === name)) {
            this.view.renderCards(this.model.getLocal().filter(element => element.nameBoard === name));
        } else alert('here nothinng added yet');
    }

    openComplainModal = (id) => {
        this.modalForm.openComplainModal(id);
    }


    openPhoto = (src) => {
        this.view.openPhoto(src);
    }

    openModal = (id) => {
        console.log('open base modal')
        this.modalForm.openModal(id);
    }

    onCardAction = (id) => {
        this.view.openComplainModal();
    }

    closeComplainModal = () => {
        this.modalForm.closeComplainModal();
    }

    sendComplain = (id) => {
        this.modalForm.sendComplain(id);
    }

    addCardBoard = (name, id) => {
        if (this.model.getLocal() === null) {
            this.model.saveLocal(name, id);
        } else if ((this.model.getLocal().find(element => element.nameBoard === name && element.id === id))) {
            alert('already added')
        } else if
            ((this.model.getLocal().find(element => element.nameBoard === name && element.id === id)) === undefined) {
            this.model.saveLocal(name, id);
        }
    }

    addComplaint = (name, id) => {
        if ([...document.getElementsByClassName('form-check-input')].find(item => { return item.checked })) {
            console.log('hello comlaint')
            if (this.model.getLocalForbidden() === null) {
                this.model.saveLocalForbidden(name, id);
            } else if ((this.model.getLocalForbidden().find(element => element.nameBoard === name && element.id === id))) {
                alert('complaint already added')
            } else if
                ((this.model.getLocalForbidden().find(element => element.nameBoard === name && element.id === id)) === undefined) {
                this.model.saveLocalForbidden(name, id);
            }
        }
    }

    onCardAction = (action, payload = undefined) => {
        switch (action) {
            case CardAction.OpenFull:
                this.openPhoto(payload);
                break;
            case CardAction.OpenOptions:
                this.openModal(payload);
                break;
            case CardAction.openComplainModal:
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

