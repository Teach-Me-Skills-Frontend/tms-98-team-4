import { url } from './models_utils.js'
import { createCard } from '../View/CardList/CardList_utils.js';

const container = document.getElementById('card-container');


export function getData() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            renderCard(data);
        });
}

function renderCard(data) {
    container.innerHTML = '';
    data.forEach(picture => {
        container.append(createCard(picture));
    })
}