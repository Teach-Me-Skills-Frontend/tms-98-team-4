import { CardAction, CardStatus } from "./basic_constants";
import { CardModel } from "./Model/model_index";
import { CardModel } from "./Model/model_index";

class CardController {
	constructor(containerId) {
		// this.model = new CardModel();
		this.viewCard = new CardView({
			containerId,
			// cards: this.model.getCurrentTasks(),
			// onFilterChange: this.setTaskFilter,
			// onTaskAction: this.onTaskAction,
			// filter: this.model.filter,
			// statistics: getViewStatisticsProps(this.model.getStatistics()),
		});
		// this.viewPin = new CardPin();
	}
	onTaskAction = (action, payload) => {
		switch (action) {
			case TaskAction.Add:
				this.createNewTask(payload);
				break;
			case TaskAction.Delete:
				this.removeTask(payload);
				break;
			case TaskAction.Complete:
			case TaskAction.Undo:
				this.setTaskStatus(
					payload,
					action === TaskAction.Complete
						? TaskStatus.Completed
						: TaskStatus.InProgress
				);
				break;
		}

		this.view.renderTasks(this.model.getCurrentTasks());
		this.view.updateStatistics(
			getViewStatisticsProps(this.model.getStatistics())
		);
	};
}
