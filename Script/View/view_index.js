import { CardList } from "./CardList/CardList.js";
import { Footer } from "./Footer/footer.js";
import { Header } from "./Header/header.js";
import { ComplainModal } from "./ModalView/ModalAddBan/ModalComplain.js";
import { BoardModal } from "./ModalView/ModalAddCard/ModalAddCard.js";

function createPinterestAppCard(header, cardList) {
	const appCard = document.createElement('div');
	appCard.classList.add('app-card', 'd-flex', 'flex-column');
	appCard.setAttribute('id', 'app-card');
	// const wrapper = document.createElement('div');
	// wrapper.classList.add('wrap');
	// wrapper.append(header, cardList);
	appCard.append(header, cardList);
	return appCard;
}



export class View {
	constructor({ containerId, onHeaderAction, onCardAction, onBoardAction }) {
		this.cardList = new CardList(onCardAction);
		this.header = new Header(onHeaderAction, onBoardAction);
		this.footer = new Footer()
		this.complainModal = new ComplainModal();
		this.BoardModal = new BoardModal();
		this.rootContainer = document.getElementById(containerId);
		this.appCard = createPinterestAppCard(this.header.cardContainer, this.cardList.cardContainer);
		this.rootContainer.append(this.appCard);
		this.rootContainer.appendChild(this.footer.footerContainer);
	}

	renderCards = (cards) => {
		this.cardList.renderCards(cards);
	}

	renderCardsBoard = (cards) => {
		this.cardList.renderCardsBoard(cards);
	}

	openPhoto = (src) => {
		this.cardList.openPhoto(src);
	}
	renderBoardInfo(numberItems, name) {
		this.header.renderBoardInfo(numberItems, name);
	}

	removeBoardsInfo() {
		this.header.removeBoardsInfo();
	}

	renderEmptyList() {
		this.cardList.renderEmptyList();
	}
}
