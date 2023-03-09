import { CardList } from "./View/CardList/CardList.js";
import { CardView } from "./View/view_index.js";
import { CardModel, getData } from "./Model/model_index.js";



export class CardController {
	constructor(containerId) {
		this.model = new CardModel();
		this.view = new CardView ({ containerId });
	}

	initialize() {
        getData()
        .then(
            data => {
                this.model.setCards(data);
                this.view.renderCards(this.model.getCards())
            })
    }
}
