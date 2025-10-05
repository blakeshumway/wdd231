// When the page loads, set the current timestamp in ISO format
document.addEventListener('DOMContentLoaded', function () {
    const timestampField = document.getElementById('timestamp');
    const now = new Date().toISOString(); // e.g., "2025-10-03T18:34:21.123Z"
    timestampField.value = now;
});

//Modals
const modalNp = document.querySelector("#np");
const modalBronze = document.querySelector("#bronze");
const modalSilver = document.querySelector("#silver");
const modalGold = document.querySelector("#gold");


//NP
const openModalNp = document.querySelector(".open-button-np");
const closeModalNp = document.querySelector(".close-button-np");

openModalNp.addEventListener("click", () => {
  modalNp.showModal();
});

closeModalNp.addEventListener("click", () => {
  modalNp.close();
});

//Bronze
const openModalBronze = document.querySelector(".open-button-bronze");
const closeModalBronze = document.querySelector(".close-button-bronze");

openModalBronze.addEventListener("click", () => {
  modalBronze.showModal();
});

closeModalBronze.addEventListener("click", () => {
  modalBronze.close();
});

//Silver
const openModalSilver = document.querySelector(".open-button-silver");
const closeModalSilver = document.querySelector(".close-button-silver");

openModalSilver.addEventListener("click", () => {
  modalSilver.showModal();
});

closeModalSilver.addEventListener("click", () => {
  modalSilver.close();
});

//Gold
const openModalGold = document.querySelector(".open-button-gold");
const closeModalGold = document.querySelector(".close-button-gold");

openModalGold.addEventListener("click", () => {
  modalGold.showModal();
});

closeModalGold.addEventListener("click", () => {
  modalGold.close();
});



