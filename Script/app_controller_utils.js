export function removeListeners() {
    const buttons = Array.from(document.querySelectorAll('[id*=button_]'));

    for (const button of buttons) {
        const oldBtn = button;
        const newBtn = oldBtn.cloneNode(true);
        oldBtn.parentNode.replaceChild(newBtn, oldBtn);
    }
}

export function setPageURLs (linkArr, pageURLs) {
    for (const link of linkArr) {
        const urlType = link.split(/[""]/)[1];
        pageURLs[urlType] = link.split(/[<>]/)[1];
    }
}

export function setCurrPage(searchURL) {
    const currPage = document.getElementById('button_curr');
    if (!searchURL.match(/(?<=&page=)(.*)(?=&per)/g)) {
        currPage.textContent = '1';
    } else{
        currPage.textContent = searchURL.match(/(?<=&page=)(.*)(?=&per)/g)[0];
    }
}
