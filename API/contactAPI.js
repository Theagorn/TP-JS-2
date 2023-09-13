const pokemonText = document.getElementById("pokemonList");

async function recup20Pokemon() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

    const reponse = await fetch(apiUrl);
    const data = await reponse.json();

    const pokemonNames = data.results.map(pokemon => `<p class="pokemon-name">${pokemon.name}</p>`).join('');

    pokemonList.innerHTML = pokemonNames;

}

recup20Pokemon();
