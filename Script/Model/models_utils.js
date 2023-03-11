import { numberLoadCards } from './model_constants.js';

export function getRandomArbitrary(min, max) {
    let pageNumber = Math.random() * (max - min) + min;
    return Math.round(pageNumber);
}
export let randomPage = getRandomArbitrary(1, 334);
export const url = `https://api.unsplash.com/photos?page=${randomPage}&per_page=${numberLoadCards}&client_id=04ufwLfYkUW_uO9OlQOojuE9hQFxR0veEPagGYh0VGA`;




