//пишем класс прорисовки всего приложения (Cards, Pin, Search)//

// import { TaskAction } from "../constants.js";
// import { TaskForm } from "./TaskForm/TaskForm.js";
// import { TaskStatistics } from "./TaskStatistics/TaskStatistics.js";
// import { TaskFilter } from "./TaskFilter/TaskFilter.js";
// import { TaskTable } from "./TaskTable/TaskTable.js";

function createPinterestAppCard(form, CardTable) {
	const card = document.createElement("div");
	card.classList.add("card", "rounded-3");

	const cardHeader = document.createElement("div");
	cardHeader.classList.add(
		"container-sm",
		"d-flex",
		"justify-content-between",
		"header_spacing"
	);
	cardHeader.append(form);

	// const cardBody = document.createElement("div");
	// cardBody.classList.add("card-body");
	// cardBody.append(filterContainer, taskTable);

	// const cardFooter = document.createElement("div");
	// cardFooter.classList.add("card-footer");
	// cardFooter.append(taskStatistics);

	// card.append(cardHeader, cardBody, cardFooter);

	// return card;
}

export class CardView {
	constructor({
		// onFilterChange,
		// onTaskAction,
		containerId = "root",
		filter,
		tasks,
		statistics,
	}) {
		this.addTaskForm = new TaskForm({
			onTaskAdd: (taskText) => onTaskAction(TaskAction.Add, taskText),
		});
		this.taskFilter = new TaskFilter({ filter, onFilterChange });
		this.taskTable = new TaskTable({ tasks, onTaskAction });
		this.taskStatistics = new TaskStatistics(statistics);

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
