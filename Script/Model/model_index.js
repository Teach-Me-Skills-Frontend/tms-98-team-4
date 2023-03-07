import {url} from './model_utils'


function getData() {
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
          return data;
    });
}