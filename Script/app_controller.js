import { CardList } from "./View/CardList/CardList.js";

export class CardController {
	constructor(containerId) {
		// this.model = new CardModel();
		this.viewCard = new CardList(containerId);
	}
}
