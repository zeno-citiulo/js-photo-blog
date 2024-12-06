//https://jsonplaceholder.typicode.com/photos?_limit=6

// 1-come prima cosa faccio la chiamata all'endpoint di JSON e mi viene restituito un array di oggetti ed ogniugno di loro rappresenta una fotografia.
// 2-Potrei usare questi dati in modo che ogni card che io ho all'interno del mio progetto venga riempita con i dati che io ho all'interno del mio array di oggetti.

const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6'
const image = document.querySelector('.place-holder')

photoHolder()

function photoHolder(){
  axios.get(endpoint)
    .then(res => {
      //console.log(res.data);
      response.data.forEach(photoHolder => printCard(photoHolder))
    })
    .catch(e => {
      console.log(e);
    })
}



function printCard(photoHolder){

  console.log(photoHolder);
  
}