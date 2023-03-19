import { View } from "./View/view_index.js";
import { CardModel, getData, getNewData } from "./Model/model_index.js";
import { CardAction } from './basic_constants.js';
import { ModalAction, boardNames, BoardsAction, HeaderAction } from './View/view_constants.js';
import { ModalForm } from './View/ModalView/ModalForm.js';
import { LocalStorageKey } from './Model/model_index.js';

export class CardController {
    constructor(containerId) {
        this.model = new CardModel();
        this.view = new View({ containerId, onHeaderAction: this.onHeaderAction, onCardAction: this.onCardAction, onBoardAction: this.onBoardAction });
        this.modalForm = new ModalForm(this.onModalAction);
        this.render = this.renderCountCardstart(boardNames);
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
                this.closeAddModal(payload, id);
                break;
            case ModalAction.addCardBoard:
                this.addCardBoard(payload, id);
                break;
            case ModalAction.deleteCard:
                this.deleteCard(payload);
                break;

        }
    }

    openBoardModal = (id) => {
        this.modalForm.openBoardModal(id)
    }

    closeAddModal = (payload, id) => {
        this.modalForm.closeAddModal();
        this.modalForm.openModal(id);

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


    deleteCard = (id) => {
        this.model.deleteCard(id)
        this.renderCountCardstart(boardNames);
        const btn = document.getElementById(ModalAction.deleteCard);
        btn.setAttribute('disabled', 'disabled');
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
        this.renderCountCardstart(boardNames);
    }

    cleanBoard = (name) => {
        this.model.cleanBoard(name);
        this.renderCountCardItem(name);
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
        this.modalForm.openModal(id);
    }

    onCardAction = (id) => {
        this.view.openComplainModal();
    }

    closeComplainModal = (id) => {
        this.modalForm.openModal(id);
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
        this.renderCountCardItem(name);
        this.modalForm.closeModalBoard();
    }

    renderCountCardItem = (name) => {
        const boardName = document.getElementById(name);
        boardName.textContent = `${name} [ ${(this.model.cardStorage.filter(element => element.nameBoard === name)).length} ]`;
    }

    renderCountCardstart = (name) => {
        for (const key of name) {
            const boardName = document.getElementById(key);
            boardName.textContent = `${key} [ ${(this.model.cardStorage.filter(element => element.nameBoard === key)).length} ]`
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

