import { createCardModal } from '../ModalView/ModalView_utils.js'

function createCardButton(id) {
   const cardButton = document.createElement('button');
   cardButton.classList.add('card-button');
   cardButton.setAttribute('data-card-action', 'openOptions');
   const cardImg = document.createElement('img');
   cardImg.setAttribute('src', '././style/img/three_dots_icon_159804 (1).svg');
   cardImg.classList.add('btnImg');
   cardButton.append(cardImg);
   cardButton.setAttribute('id', id);

   return cardButton;
}

export function createCard(cardParams, CardAction) {
   const { urls, alt_description, user } = cardParams;

   const card = document.createElement('div');
   card.classList.add('card', 'shadow');
   card.id = cardParams.id;

   const mainImg = document.createElement('img');
   mainImg.classList.add('card-img-top', 'img-fluid', 'flex-1');
   mainImg.setAttribute('src', urls.regular);
   mainImg.setAttribute('data-card-id', cardParams.id);

   const mainImgContainer = document.createElement('div');
   mainImgContainer.classList.add('img-container');
   mainImgContainer.append(mainImg, createCardButton(cardParams.id));

   const cardBody = document.createElement('div');
   cardBody.classList.add('card-body', 'flex-0');

   const author = document.createElement('span');
   author.classList.add('card-title');
   author.textContent = user.name;

   const cardText = document.createElement('p');
   cardText.classList.add('card-text');
   cardText.textContent = alt_description;

   cardBody.append(author, cardText);

   card.append(mainImgContainer, cardBody);

   for (const key in CardAction) {
      mainImg.setAttribute(key, CardAction[key]);
   }

   return card;
}
