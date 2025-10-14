// When the page loads, set the current timestamp in ISO format
document.addEventListener('DOMContentLoaded', function () {
    const timestampField = document.getElementById('timestamp');
    const now = new Date().toISOString(); // e.g., "2025-10-03T18:34:21.123Z"
    timestampField.value = now;
});

//Modals
const modalDspre = document.querySelector("#dspre");
const modalMapStudio = document.querySelector("#map-studio");
const modalBtx = document.querySelector("#btx");



//DSPRE
const openModalDspre = document.querySelector("#open-button-dspre");
const closeModalDspre = document.querySelector(".close-button-dspre");

openModalDspre.addEventListener("click", () => {
  modalDspre.showModal();
});

closeModalDspre.addEventListener("click", () => {
  modalDspre.close();
});

//Map Studio
const openModalMapStudio = document.querySelector("#open-button-map-studio");
const closeModalMapStudio = document.querySelector(".close-button-map-studio");

openModalMapStudio.addEventListener("click", () => {
  modalMapStudio.showModal();
});

closeModalMapStudio.addEventListener("click", () => {
  modalMapStudio.close();
});

//BTX
const openModalBtx = document.querySelector("#open-button-btx");
const closeModalBtx = document.querySelector(".close-button-btx");

openModalBtx.addEventListener("click", () => {
  modalBtx.showModal();
});

closeModalBtx.addEventListener("click", () => {
  modalBtx.close();
});
