import { CardList } from "./View/CardList/CardList.js";
import { CardView } from "./View/view_index.js";
import { CardModel, getData } from "./Model/model_index.js";
import { CardAction } from './View/view_constants.js';



export class CardController {
    constructor(containerId) {
        this.model = new CardModel();
        this.view = new CardView({ containerId, onHeaderAction: this.onHeaderAction });
    }

    seacrhCard(searchText) {
        this.model.createCard(searchText);
    }

    onHeaderAction = (action, payload) => {
        switch (action) {
            case CardAction.search:
                this.searchCard(payload);
                break;
        }
    }

    initialize() {
        getData()
            .then(
                data => {
                    this.model.setCards(data);
                    this.view.renderCards(this.model.getCards());
                    console.log(this.model.getCards(data));
                })
    }
}
