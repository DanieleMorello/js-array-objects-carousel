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

const carousel = [
  {
    url: "./assets/img/01.webp",
    titolo: "Spiderman",
    descrizione: "",
  },
  {
    url: "./assets/img/02.webp",
    titolo: "Ratchet & Clank",
    descrizione: "Platform-adventure game",
  },
  {
    url: "./assets/img/03.webp",
    titolo: "Star wWrs",
    descrizione: "Fantasy movie",
  },
  {
    url: "./assets/img/04.webp",
    titolo: "Stray",
    descrizione: "Adventur game",
  },
  {
    url: "./assets/img/05.webp",
    titolo: "Avenger",
    descrizione: "Marvel heroes",
  }
]

let activeImg = 0

// Inserisce dinamicamante le immagini
carousel.forEach((thisImgUrl, i) => {
  const imgMarkup = `<img src="${thisImgUrl.url}" class="img-fluid ${i === activeImg ? "active" : ""}">`
  console.log(imgMarkup)
  sliderImgElement.insertAdjacentHTML("beforeend", imgMarkup)
});

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
