function getRandomArbitrary(min, max) {
    pageNumber = Math.random() * (max - min) + min;
    return Math.round(pageNumber);
}
let randomPage = getRandomArbitrary (1, 334);
export const url = `https://api.unsplash.com/photos?page=${randomPage}&per_page=30&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;
