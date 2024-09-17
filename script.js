fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then((data) => {
    crearCard(data)
  });

let container = document.getElementById("container")

function crearCard(data) {
   container.innerHTML = '';
   
   for (let i = 0; i < 20; i++) {
    
    let card = `
      <div class="card">
        <p class="text-target">${data.results[i].name}</p>
        <img class="personajes" src="${data.results[i].image}" alt="${data.results[i].name}">
        
      </div>
    `;

    // Agregar la tarjeta al contenedor
    container.innerHTML += card;
  }

}
