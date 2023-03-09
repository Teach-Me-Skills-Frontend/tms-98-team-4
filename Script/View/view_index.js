//пишем класс прорисовки всего приложения (Search, Board, Cards)//

import { CardList } from "./CardList/CardList.js";
import { header } from "./Header/header.js";


function createPinterestAppCard(header, CardList) {
	const appCard = document.createElement('div');
	appCard.classList.add('app-card');
	appCard.append(header, CardList);
	return appCard;
}


export class CardView {
	constructor({ cards, containerId = 'root' }) {
		this.CardList = new CardList(cards);

		const appCard = createPinterestAppCard(header, this.CardList.cardContainer);
		const rootContainer = document.getElementById(containerId);
		rootContainer.append(appCard);
	}

	renderCards = (cards) =>
    {
        this.CardList.renderCards(cards);
    }

	
}
