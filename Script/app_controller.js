import { CardList } from "./View/CardList/CardList.js";
import { CardView } from "./View/view_index.js";
import { CardModel, getData, getDataSearch } from "./Model/model_index.js";
import { HeaderAction } from './View/view_constants.js';
import { CardAction } from './basic_constants.js';

export class CardController {
    constructor(containerId) {
        this.model = new CardModel();
        this.view = new CardView({ containerId, onHeaderAction: this.onHeaderAction, onCardAction: this.onCardAction });
    }

    searchCard(searchURL) {
        getDataSearch(searchURL).then(data => {
            this.model.setCards(data.results);
            console.log(data);
            this.view.renderCards(this.model.getCards());
            console.log(this.model.getCards(data));
        })
    }

    onHeaderAction = (action, payload = undefined) => {
        switch (action) {
            case HeaderAction.search:
                this.searchCard(payload);
                break;
            case HeaderAction.reboot:
                this.Reboot(payload);
                break;
        }
    }

    Reboot(newURL) {
        getDataSearch(newURL).then(data => {
            this.model.setCards(data);
            console.log(data);
            this.view.renderCards(this.model.getCards());
            console.log(this.model.getCards(data));
        })
    }

    openPhoto = (src) => {
        this.view.openPhoto(src);
    }

    onCardAction = (action, payload) => {    
        
        console.log('qqq')
        switch (action) {
            case CardAction.OpenFull: 
                this.openPhoto(payload);
        }
    }

    initialize() {
        getData()
            .then(
                data => {
                    this.model.setCards(data);
                    console.log(data);
                    this.view.renderCards(this.model.getCards());
                    console.log(this.model.getCards(data));
                })
    }
}
