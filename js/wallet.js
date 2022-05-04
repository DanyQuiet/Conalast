let walletbtn = document.querySelector('.header__wallet');
let walletModal = document.querySelector('.wallet')
let walletClose = document.querySelector('.wallet__close');
let body = document.querySelector('body');
let walletShow = document.querySelector('.wallet__show')

let page = document.querySelector('.page')

walletbtn.addEventListener('click', openWallet);
walletClose.addEventListener('click', closeWallet)

function openWallet() {
    walletModal.classList.add('wallet__show')
    body.classList.add('no-scroll');
}


function closeWallet() {
    walletModal.classList.remove('wallet__show');
    body.classList.remove('no-scroll');

}