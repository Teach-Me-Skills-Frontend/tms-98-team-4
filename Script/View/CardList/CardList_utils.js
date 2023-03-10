export function createCard(cardParams) {
    const { urls, alt_description, user } = cardParams;

    const card = document.createElement('div');
    card.classList.add('card');
    card.id = crypto.randomUUID();

    const mainImg = document.createElement('img');
    mainImg.classList.add('card-img-top', 'img-fluid', 'flex-1');
    mainImg.setAttribute('src', urls.regular);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'flex-0');

    const author = document.createElement('h5');
    author.classList.add('card-title');
    author.textContent = user.name;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = alt_description;

    cardBody.append(author, cardText);

    card.append(mainImg, cardBody);

    return card;
}