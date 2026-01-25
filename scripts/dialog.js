const footerButton = document.querySelector('.footer__button');
const dialog = document.querySelector('.dialog');
const dialogButton = document.querySelector('.dialog__button');

footerButton.addEventListener('click', () => {
  dialog.showModal();
});

dialogButton.addEventListener('click', () => {
  dialog.close();
});
