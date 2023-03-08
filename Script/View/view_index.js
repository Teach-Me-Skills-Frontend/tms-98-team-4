//пишем класс прорисовки всего приложения (Search, Board, Cards)//

import { CardList } from "./CardList/CardList.js";
import { header } from "./Header/header.js";


function createPinterestAppCard(header, CardTable) { }


export class CardView {
	constructor({ containerId = "root" }) {
		this.taskTable = new TaskTable({ tasks, onTaskAction });
		const container = document.getElementById(containerId);
		const card = createTaskAppCard(
			this.addTaskForm.form,
			this.taskFilter.container,
			this.taskTable.table,
			this.taskStatistics.container
		);

		container.append(card);
	}

	renderTasks = (tasks) => {
		this.taskTable.renderTasks(tasks);
	};

	updateStatistics = (statistics) => {
		this.taskStatistics.setProgress(statistics);
	};
}
