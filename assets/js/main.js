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
const sliderImgElement = document.querySelector('.slider > .images')
const prevBtnElement = document.querySelector('.prev')
const nextBtnElement = document.querySelector('.next')

const carousel = [
  {
    url:'./assets/img/01.webp',
    titolo: 'Spiderman',
    descrizione: ''
  },
  {
    url:'./assets/img/02.webp',
    titolo: 'Ratchet & Clank',
    descrizione: 'Platform-adventure game'
  },
  {
    url:'./assets/img/03.webp',
    titolo: 'Star wWrs',
    descrizione: 'Fantasy movie'
  },
  {
    url:'./assets/img/04.webp',
    titolo: 'Stray',
    descrizione: 'Adventur game'
  },
  {
    url:'./assets/img/05.webp',
    titolo: 'Avenger',
    descrizione: 'Marvel heroes'
  },
]