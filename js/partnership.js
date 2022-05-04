 //  modal partner
 let partnership = document.querySelector("#partnership");
 let openPart = document.querySelector("#modal-partner");
 let cross = document.querySelector('.partnerhsip__close');


 //  modal support
 let support = document.querySelector("#support");
 let openSup = document.querySelector("#modal-support");
 let crossSup = document.querySelector('.support__close');

 partnership.addEventListener('click', openModal);
 cross.addEventListener('click', closeModal);
 support.addEventListener('click', addModalSup)
 crossSup.addEventListener('click', closeSup)

 function closeSup() {
     openSup.classList.remove("modal-show");
     body.classList.remove('no-scroll');
 }

 function addModalSup() {
     openSup.classList.add('modal-show')
     body.classList.add('no-scroll');
 }


 function closeModal() {
     openPart.classList.remove("modal-show");
     body.classList.remove('no-scroll');
 }

 function openModal() {
     openPart.classList.add('modal-show')
     body.classList.add('no-scroll');
 }