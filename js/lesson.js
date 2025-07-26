const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');

let currentIndex = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (i) => {
    hideTabContent();
    tabContentBlocks[i].style.display = 'block';
    tabs[i].classList.add('tab_content_item_active');
};

showTabContent(currentIndex);
setInterval(() => {
    currentIndex++;
    if (currentIndex >= tabContentBlocks.length) {
        currentIndex = 0;
    }
    showTabContent(currentIndex);
}, 3000);

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

let isUpdating = false;

somInput.oninput = () => {
    if (isUpdating) return;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/converter.json');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();

    xhr.onload = () => {
        const conv = JSON.parse(xhr.response);
        isUpdating = true;
        usdInput.value = (somInput.value / conv.usd).toFixed(2);
        eurInput.value = (somInput.value / conv.eur).toFixed(2);
        isUpdating = false;
    };
};

usdInput.oninput = () => {
    if (isUpdating) return;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/converter.json');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();

    xhr.onload = () => {
        const conv = JSON.parse(xhr.response);
        const som = usdInput.value * conv.usd;
        isUpdating = true;
        somInput.value = som.toFixed(2);
        eurInput.value = (som / conv.eur).toFixed(2);
        isUpdating = false;
    };
};

eurInput.oninput = () => {
    if (isUpdating) return;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/converter.json');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send();

    xhr.onload = () => {
        const conv = JSON.parse(xhr.response);
        const som = eurInput.value * conv.eur;
        isUpdating = true;
        somInput.value = som.toFixed(2);
        usdInput.value = (som / conv.usd).toFixed(2);
        isUpdating = false;
    };
};



