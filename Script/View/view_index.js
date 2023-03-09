//пишем класс прорисовки всего приложения (Search, Board, Cards)//

import { CardList } from "./CardList/CardList.js";
<<<<<<< HEAD
import { Header } from "./Header/header.js";
// import { header } from "./Header/header.js";


function createPinterestAppCard(header, cardList) { //пробросить header в функцию, когда будет готов
	const appCard = document.createElement('div');
	appCard.classList.add('app-card');

	appCard.append(header, cardList); //пробросить header в append, когда будет готов
=======
// import { header } from "./Header/header.js";


function createPinterestAppCard(CardList) { //пробросить header в функцию, когда будет готов
	const appCard = document.createElement('div');
	appCard.classList.add('app-card');
	appCard.append(CardList); //пробросить header в append, когда будет готов
>>>>>>> bf5d95f (feat: add model, connect model and view to controller)
	return appCard;
}


export class CardView {
	constructor({ cards, containerId = 'root' }) {
		this.CardList = new CardList(cards);
		this.Header = new Header(cards);

<<<<<<< HEAD
=======
		const appCard = createPinterestAppCard(this.CardList.cardContainer); //пробросить header в appCard, когда будет готов
>>>>>>> bf5d95f (feat: add model, connect model and view to controller)
		const rootContainer = document.getElementById(containerId);
		const appCard = createPinterestAppCard(this.Header.cardContainer, this.CardList.cardContainer); //пробросить header в appCard, когда будет готов
		rootContainer.append(appCard);
	}

<<<<<<< HEAD
	renderCards = (cards) => {
		this.CardList.renderCards(cards);
	}
=======
	renderCards = (cards) =>
    {
        this.CardList.renderCards(cards);
    }
>>>>>>> bf5d95f (feat: add model, connect model and view to controller)
}
