/*
  Dato un array di oggetti letterali con:
    -url dell’immagine
    -titolo
    -descrizione

  Creare un carosello come nella foto allegata.
*/

/*
  Milestone 1:
  Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per 
  popolare dinamicamente il carosello.
  Al click dell'utente sulle frecce verso sinistra o destra, 
  l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
 */

// Seleziona gli elementi del dom
const sliderImgElement = document.querySelector(".slider > .images")
const cardBodyElement = document.querySelector(".slider > .card-body")
const prevBtnElement = document.querySelector(".prev")
const nextBtnElement = document.querySelector(".next")

const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

let activeImg = 0

// Inserisce dinamicamante le immagini
images.forEach((thisImgUrl, i) => {
  const imgMarkup = `<img src="./assets/${thisImgUrl.image}" class="img-fluid ${i === activeImg ? "active" : ""}">`
  console.log(imgMarkup)
  sliderImgElement.insertAdjacentHTML("beforeend", imgMarkup)
})

// Seleziona tutte le immagini
const imgElementsList = document.querySelectorAll(".slider > .images > img")
// console.log(imgElementsList)

// Aggiunge un event listener al prev button
prevBtnElement.addEventListener("click", function () {
  console.log("prev")

  const thisImg = imgElementsList[activeImg]
  console.log(thisImg)

  // Rimuove dall' immagine la classe active
  thisImg.classList.remove("active")

  // Decrementa il valore di activeImg
  activeImg = activeImg === 0 ? imgElementsList.length - 1 : activeImg - 1

  // Prende la prossima immagine
  const prevImg = imgElementsList[activeImg]
  console.log(prevImg)

  // Aggiunge la class active
  prevImg.classList.add("active")
});

// Aggiunge un event listener al next button
nextBtnElement.addEventListener("click", function () {
  console.log("next")

  const thisImg = imgElementsList[activeImg]
  console.log(thisImg)

  // Rimuove dall' immagine la classe active
  thisImg.classList.remove("active")

  // Incrementa il valore di activeImg
  if(activeImg === imgElementsList.length -1) {
    activeImg = 0
  } else {
    activeImg++
  }

  // Prende la prossima immagine
  const nextImg = imgElementsList[activeImg]
  console.log(nextImg)

  // Aggiunge la class active
  nextImg.classList.add("active")
})
