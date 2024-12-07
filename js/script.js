//https://jsonplaceholder.typicode.com/photos?_limit=6

// 1-come prima cosa faccio la chiamata all'endpoint di JSON e mi viene restituito un array di oggetti ed ogniugno di loro rappresenta una fotografia.
// 2-Potrei usare questi dati in modo che ogni card che io ho all'interno del mio progetto venga riempita con i dati che io ho all'interno del mio array di oggetti.

const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'
const row = document.querySelector(".row")

photoHolder()

function photoHolder(){
  axios.get(endpoint)
    .then(res => {
      //console.log(res.data);
      res.data.forEach(photoHolder => printCard(photoHolder))
    })
    .catch(e => {
      console.log(e);
    })
}



function printCard(photoHolder){
  const {image, title} = photoHolder;
  //console.log(photoHolder);
  row.innerHTML += `<div class="col">
          <div class="card">
            <div class="card-images">
              <img class="pin" src="./assets_day1/img/pin.svg" alt="">
              <img class="${image}" src="./assets_day1/img/placeholder-600x600.jpg" alt="img 1">
              <div class="badges">
                <span class="badge tag">${title}</span>
              </div>
            </div>
          </div>
        </div>`
}


const cards = document.querySelectorAll('.card-img'); 
const hoverLayerContainer = document.querySelector('.d-none'); 
const closeButton = document.querySelector('.hover-button'); 


function showOverlay() {
  hoverLayerContainer.classList.remove('d-none'); 
}


function hideOverlay() {
  hoverLayerContainer.classList.add('d-none'); 
}


cards.forEach(card => {
  card.addEventListener('click', showOverlay);
});
