import { url } from './models_utils.js'


export function getData() {
    return fetch(url)
            .then((response) => response.json());
}