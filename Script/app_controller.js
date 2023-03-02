import { CardAction, CardStatus } from "./basic_constants";
import { CardModel } from "./Model/model_index";
import { CardModel } from "./Model/model_index";

class CardController {
	constructor(containerId) {
		// this.model = new CardModel();
		this.viewCard = new CardView({
			containerId,
		});
		this.viewPin = new CardPin();
	}
}
