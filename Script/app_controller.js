import { View } from "./View/view_index.js";
import { CardModel } from "./Model/model_index.js";
import { CardAction } from './basic_constants.js';
import { ModalAction, boardNames, BoardsAction, HeaderAction } from './View/view_constants.js';
import { ModalForm } from './View/ModalView/ModalForm.js';
import { LocalStorageKey } from './Model/model_index.js';
import { removeSearchElements } from './View/view_utils.js';


export class CardController {
    constructor(containerId) {
        this.model = new CardModel();
        this.view = new View({ containerId, onHeaderAction: this.onHeaderAction, onCardAction: this.onCardAction, onBoardAction: this.onBoardAction });
        this.modalForm = new ModalForm(this.onModalAction);
        this.render = this.renderCountCardstart(boardNames);
        this.starter = this.initialize();
    }

    onHeaderAction = (action, payload = undefined) => {
        switch (action) {
            case HeaderAction.search:
                this.getSearch(payload);
                break;
            case HeaderAction.reload:
                this.reload();
                break;
        }
    }

    reload() {
        if (document.getElementById('board-info')) {
            this.view.removeBoardsInfo();
        }
        this.initialize();
    }

    assignNextURL() {
        const buttons = Array.from(document.querySelectorAll('[id*=button_]'))

        for (const button of buttons) {
            const type = button.getAttribute('id').split('_')[1];

            if (Object.keys(this.model.pageURLs).includes(type)) {
                button.addEventListener('click', () => {
                    window.scrollTo({ top: 100, behavior: "smooth" });
                    this.getSearch(this.model.pageURLs[type]);
                })
            }
        }
    }

    async getSearch(searchURL) {
        await this.model.getSearch(searchURL);
        this.view.renderCards(this.model.getCardsSearch());
        this.assignNextURL(this.model.pageURLs);
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
                this.deleteCard(payload, id);
                break;

        }
    }

    openComplainModal = (id) => {
        this.modalForm.openComplainModal(id);
    }

    closeComplainModal = (id) => {
        this.modalForm.openModal(id);
        this.modalForm.closeComplainModal();
    }

    addComplaint = (name, id) => {
        if ([...document.getElementsByClassName('form-check-input')].find(item => { return item.checked })) {
            if (this.model.getLocalForbidden() === null) {
                this.model.saveLocalForbidden(name, id);
            } if ((this.model.getLocalForbidden().find(element => element.nameBoard === name && element.id === id))) {
                alert('complaint already added')
            } if
                ((this.model.getLocalForbidden().find(element => element.nameBoard === name && element.id === id)) === undefined) {
                this.model.saveLocalForbidden(name, id);
            }
        }
    }

    sendComplain = (id) => {
        this.modalForm.sendComplain(id);
        this.checkCardOnBoard(id);
        for (let key of boardNames) {
            this.model.deleteCard(id, key);
        }
        this.renderCountCardstart(boardNames);
    }

    openBoardModal = (id) => {
        this.modalForm.openBoardModal(id)
    }

    closeAddModal = (payload, id) => {
        this.modalForm.closeAddModal();
        this.modalForm.openModal(id);

    }

    addCardBoard = (name, id) => {
        if (this.model.getLocal() === null) {
            this.model.saveLocal(name, id);
            this.modalForm.openAddedAlert(id);
        } else if ((this.model.getLocal().find(element => element.nameBoard === name && element.id === id))) {
            this.modalForm.openModalAlert(id);
        } else if
            ((this.model.getLocal().find(element => element.nameBoard === name && element.id === id)) === undefined) {
            this.modalForm.openAddedAlert(id);
            this.model.saveLocal(name, id);
        }
        this.renderCountCardItem(name);
        this.modalForm.closeModalBoard();
    }

    deleteCard = (id) => {
        this.renderCountCardstart(boardNames);
        this.checkCardOnBoard(id);
        const card = document.getElementById(`${id}`);
        card.remove();
    }

    onBoardAction = (action, payload = undefined) => {
        switch (action) {
            case BoardsAction.loadBoard:
                this.loadBoard(payload);
                break;
            case BoardsAction.cleanBoardsCards:
                this.cleanAllBoards();
                break;
            case BoardsAction.returnToTheMainPage:
                this.returnMain();
                break;
            case BoardsAction.cleanBoard:
                this.cleanBoard(payload);
                break;
            case BoardsAction.returnToSearch:
                this.returnToSearch();
                break;
        }
    }


    deleteCard = (id) => {
        this.renderCountCardstart(boardNames);
        for (let key of boardNames) {
            if (document.getElementById('board-info').getAttribute('name') === key) {
                this.model.deleteCard(id, key);
                this.view.removeBoardsInfo();
                console.log(this.model.cardStorage.filter(element => element.nameBoard === key).length);
                this.view.renderBoardInfo(key, this.model.cardStorage.filter(element => element.nameBoard === key).length);
                this.renderCountCardItem(key);
            }
        }
        const card = document.getElementById(`${id}`);
        card.remove();
    }

    returnMain = () => {
        this.view.renderCards(this.model.getCards());
        this.view.removeBoardsInfo();
        removeSearchElements();
    }

    returnToSearch = () => {
        if (this.model.linkArr.length !== 0) {
            this.view.removeBoardsInfo();
            this.getSearch(this.model.getCurrentSearchPage());
        } else this.returnMain()
    }

    cleanAllBoards = () => {
        if (!this.model.getLocal() || this.model.getLocal().length === 0) {
            this.modalForm.openClearBoardsModalEmpty();
        }
        else {
            this.modalForm.openClearBoardsModalFull();
            document.getElementById('clear-boards-button-yes').addEventListener('click', () => {
                this.model.refreshLocal();
                this.modalForm.clearBoardsModalFull.remove();
                this.modalForm.openClearBoardsModalEmpty();
                this.view.renderCards(this.model.getCards())
                this.renderCountCardstart(boardNames);
                this.view.removeBoardsInfo();
            })
            document.getElementById('clear-boards-button-no').addEventListener('click', () => {
                this.modalForm.clearBoardsModalFull.remove();
            })
        }
    }

    cleanBoard = (name) => {
        this.model.cleanBoard(name);
        this.renderCountCardItem(name);
        let numberCards = null;

        if (this.model.getLocal()) {
            numberCards = (this.model.getLocal().filter(element => element.nameBoard === name)).length;
            this.view.removeBoardsInfo();
            removeSearchElements();
            this.view.renderBoardInfo(name, numberCards);
        }

        if (numberCards === 0) {
            this.view.renderEmptyList()
        }
    }

    loadBoard = (name) => {
        removeSearchElements();
        if (this.model.cardStorage.length > 0) {
            const numberCards = (this.model.cardStorage.filter(element => element.nameBoard === name)).length;
            if (this.model.cardStorage.find(element => element.nameBoard === name)) {
                this.view.renderCards(this.model.getLocal().filter(element => element.nameBoard === name));
                this.view.removeBoardsInfo();
                this.view.renderBoardInfo(name, numberCards)
            } else this.view.renderEmptyList();
            this.view.removeBoardsInfo();
            this.view.renderBoardInfo(name, numberCards)
        } else {
            this.view.renderEmptyList();
            this.view.removeBoardsInfo(); this.view.renderBoardInfo(name, 0);
        }
    }

    returnToSearch = () => {
        if (this.model.linkArr.length !== 0) {
            this.view.removeBoardsInfo();
            this.getSearch(this.model.getCurrentSearchPage());
        } else this.returnMain()
    }

    checkCardOnBoard = (id) => {
        for (let key of boardNames) {
            if (document.getElementById('board-info') && document.getElementById('board-info').getAttribute('name') === key) {
                this.model.deleteCard(id, key);
                this.view.removeBoardsInfo();
                this.view.renderBoardInfo(key, this.model.cardStorage.filter(element => element.nameBoard === key).length);
                this.renderCountCardItem(key);
            }
        }
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

    onCardAction = (action, payload = undefined) => {
        switch (action) {
            case CardAction.OpenFull:
                this.openPhoto(payload);
                break;
            case CardAction.OpenOptions:
                this.openModal(payload);
                break;
        }
    }

    openPhoto = (src) => {
        this.view.openPhoto(src);
    }

    openModal = (id) => {
        this.modalForm.openModal(id);
    }

    initialize() {
        this.model.getData()
            .then(
                data => {
                    this.model.setCards(data);
                    this.view.renderCards(this.model.getCards());
                    removeSearchElements();
                })
    }
}
