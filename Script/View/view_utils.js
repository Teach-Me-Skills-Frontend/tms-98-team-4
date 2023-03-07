//написать функцию прорисовки кнопки, общий вид для всех кнопок в приложении//
//написать функцию прорисовки модального окна, общий вид для всех модалок в приложении//


//создание карточки
export function createCard(cardParams) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    cardContainer.id = crypto.randomUUID()    ;

    const mainImg = document.createElement('img');
    mainImg.classList.add('card-img-top');
    mainImg.setAttribute('src', cardParams.url);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = cardParams.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent= cardParams.description;

    cardBody.append(cardTitle, cardText);

    cardContainer.append(mainImg, cardBody);

    return cardContainer;
}