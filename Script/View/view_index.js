//пишем класс прорисовки всего приложения (Search, Board, Cards)//

import { CardList } from "./CardList/CardList.js";
import { Header } from "./Header/header.js";
// import { header } from "./Header/header.js";


function createPinterestAppCard(header, cardList) { //пробросить header в функцию, когда будет готов
	const appCard = document.createElement('div');
	appCard.classList.add('app-card');

	appCard.append(header, cardList); //пробросить header в append, когда будет готов
	return appCard;
}


export class CardView {
	constructor({ cards, containerId = 'root', onHeaderAction }) {
		this.CardList = new CardList(cards);
		this.header = new Header({ onHeaderAction: (searchText) => onHeaderAction('input', searchText) });

		const rootContainer = document.getElementById(containerId);
		const appCard = createPinterestAppCard(this.header.cardContainer, this.CardList.cardContainer); //пробросить header в appCard, когда будет готов
		rootContainer.append(appCard);
	}

	renderCards = (cards) => {
		this.CardList.renderCards(cards);
	}
}
