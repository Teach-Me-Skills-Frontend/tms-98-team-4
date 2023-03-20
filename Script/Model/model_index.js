
export const LocalStorageKey = {
    boards: 'boards',
    boardsForbidden: 'boardsForbidden',
};

function getSaveCards() {
    const savedItems = localStorage.getItem(LocalStorageKey.boards);

    if (!savedItems) {
        return []
    }

    try {
        return JSON.parse(savedItems);
    } catch (err) {
        console.error(err);
        return [];
    }
}

function getForbiddenCards() {
    const savedItems = localStorage.getItem(LocalStorageKey.boardsForbidden);

    if (!savedItems) {
        return []
    }

    try {
        return JSON.parse(savedItems);
    } catch (err) {
        console.error(err);
        return [];
    }
}

export class CardModel {
    constructor() {
        this.cards = [];
        this.searchCards = [];
        this.cardStorage = getSaveCards();
        this.cardStorageForbiddent = getForbiddenCards();
        this.cardContainer = document.querySelectorAll('div');
    }

    getData() {
        const number = Math.floor(Math.random() * 334);
        const url = `https://api.unsplash.com/photos?page=${number}&per_page=28&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;
        return fetch(url)
            .then((response) => response.json())
            .catch(err => alert(err))
    }

    getSearchData(url) {
        return fetch(url)
            .then((response) => response.json())
            .catch(err => alert(err))
    }

    setCards(cards) {
        this.cards = cards;
    }

    getCards() {
        return this.cards.slice();
    }


    setCardsSearch(searchCards) {
        this.searchCards = searchCards;
    }

    getCardsSearch() {
        return this.searchCards.slice();
    }

    saveLocal(name, id) {
        let nameBoard = { nameBoard: `${name}` }
        this.cardStorage.push({ ...this.getCards().find(card => card.id === id), ...nameBoard, ...this.getCardsSearch().find(card => card.id === id), ...nameBoard });
        localStorage.setItem(LocalStorageKey.boards, JSON.stringify(this.cardStorage));
    }

    saveLocalForbidden(name, id) {
        let nameBoard = { nameBoard: `${name}` }
        this.cardStorageForbiddent.push({ ...this.getCards().find(card => card.id === id), ...nameBoard, ...this.getCardsSearch().find(card => card.id === id), ...nameBoard });
        localStorage.setItem(LocalStorageKey.boardsForbidden, JSON.stringify(this.cardStorageForbiddent));
    }

    refreshLocal() {
        this.cardStorage = [];
        localStorage.setItem(LocalStorageKey.boards, JSON.stringify(this.cardStorage));
    }

    cleanBoard = (name) => {
        const filter = this.cardStorage.filter((value) => value.nameBoard === name);
        for (let i = 0; i < filter.length; i += 1) {
            const cardIndex = this.cardStorage.findIndex((value) => value.nameBoard === name);
            if (cardIndex > -1) {
                this.cardStorage.splice(cardIndex, 1);
                localStorage.setItem(LocalStorageKey.boards, JSON.stringify(this.cardStorage));
            }
        }
    }

    deleteCard = (id) => {
        const filter = this.cardStorage.filter((value) => value.id === id);
        for (let i = 0; i < filter.length; i += 1) {
            const cardIndex = this.cardStorage.findIndex((value) => value.id === id);
            if (cardIndex > -1) {
                this.cardStorage.splice(cardIndex, 1);
                localStorage.setItem(LocalStorageKey.boards, JSON.stringify(this.cardStorage));
            }
        }
    }

    refreshLocalForbidden() {
        this.cardStorageForbiddent = [];
        localStorage.setItem(LocalStorageKey.boardsForbidden, JSON.stringify(this.cardStorageForbiddent));
    }

    getLocal() {
        return JSON.parse(localStorage.getItem(LocalStorageKey.boards));
    }
    getLocalForbidden() {
        return JSON.parse(localStorage.getItem(LocalStorageKey.boardsForbidden));
    }

}





