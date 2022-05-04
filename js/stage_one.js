let btnJoin = document.querySelector('#btnjoin');
let modalJoin = document.querySelector('#under__container');
let header = document.querySelector('#header');
let stageoneClose = document.querySelector('#stageone__close');
let stageoneBtn = document.querySelector('#stageone__btn');
let modalkycStageOne = document.querySelector('.modalkyc__stage-one');
// 
let modalkycBtn = document.querySelector('#modalkyc__btn_stageone');
let modalkycBtnTwo = document.querySelector('#modalkyc__btn_stagetwo')
let modalkycBtnThree = document.querySelector('#modalkyc__btn_stagethree')
    // 
let modalkycStageTwo = document.querySelector('.modalkyc__stage-two')
    // input Form
let modalkycFormInput = document.querySelectorAll('.modalkyc__form-input')


let card = document.querySelector('#card');
let selfie = document.querySelector('#selfie');
let checboxForm = document.querySelector('#checboxForm');
let modalkycStageThree = document.querySelector('.modalkyc__stage-three')




btnJoin.addEventListener('click', openModalStageOne);
stageoneClose.addEventListener('click', stageoneCloseModal);
stageoneBtn.addEventListener('click', stageOneOpenKyc);
modalkycBtn.addEventListener('click', NextModalKycBtn);
modalkycBtnTwo.addEventListener('click', succedModalOpen)
modalkycBtnThree.addEventListener('click', closeModalSucceed);


function closeModalSucceed() {
    modalkycStageThree.style.display = "none"

}



function succedModalOpen() {
    modalkycStageTwo.style.display = "none"
    modalkycStageThree.style.display = "block"
}

function openModalStageOne() {
    modalJoin.classList.add('stageone__open');
    header.style.position = "relative";
}

function stageoneCloseModal() {
    modalJoin.classList.remove('stageone__open');
    header.style.position = "absolute";
}

function stageOneOpenKyc() {
    modalkycStageOne.style.display = "block"
}

function NextModalKycBtn() {
    modalkycStageOne.style.display = "none";
    modalkycStageTwo.style.display = 'block';
}