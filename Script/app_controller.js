import { CardAction, CardStatus } from "./basic_constants";
import { CardModel } from "./Model/model_index";
import { CardModel } from "./Model/model_index";

class CardController {
	constructor(containerId) {
		// this.model = new CardModel();
		this.viewCard = new CardView({
			containerId,
			// cards: this.model.getCurrentTasks(),
			onFilterChange: this.setTaskFilter,
			onTaskAction: this.onTaskAction,
			filter: this.model.filter,
			statistics: getViewStatisticsProps(this.model.getStatistics()),
		});
		this.viewPin = new CardPin();
	}
}
