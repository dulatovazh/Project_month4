const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalClose.addEventListener('click', closeModal);
const showModalByScroll = () => {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
};
window.addEventListener('scroll', showModalByScroll);


document.addEventListener('DOMContentLoaded', () => {

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };
    modalClose.addEventListener('click', closeModal);

    setTimeout(openModal, 10000);
});

