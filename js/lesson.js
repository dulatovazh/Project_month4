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
