//пишем класс прорисовки всего приложения (Search, Board, Cards)//

import { CardList } from "./CardList/CardList.js";
// import { header } from "./Header/header.js";


function createPinterestAppCard(CardList) { //пробросить header в функцию, когда будет готов
	const appCard = document.createElement('div');
	appCard.classList.add('app-card');
	appCard.append(CardList); //пробросить header в append, когда будет готов
	return appCard;
}


export class CardView {
	constructor({ cards, containerId = 'root' }) {
		this.CardList = new CardList(cards);

		const appCard = createPinterestAppCard(this.CardList.cardContainer); //пробросить header в appCard, когда будет готов
		const rootContainer = document.getElementById(containerId);
		rootContainer.append(appCard);
	}

	renderCards = (cards) =>
    {
        this.CardList.renderCards(cards);
    }
}
