fetch('./data/pokemon/pokemon.json').then(response => response.json()).then(data => showPokemonEggs(data))

function showPokemonEggs(data){
    const data2k = data.pokemon.filter((pokemon) => (pokemon.egg === "2 km"));
    const data5k = data.pokemon.filter((pokemon) => (pokemon.egg === "5 km"));
    const data10k = data.pokemon.filter((pokemon) => (pokemon.egg === "10 km"));
    
    const pokemon2k = document.getElementById("doisKm");
    const pokemon5k = document.getElementById("cincoKm");
    const pokemon10k = document.getElementById("dezKm");
    
    pokemon2k.innerHTML = buildPokemonsImages(data2k);
    pokemon5k.innerHTML = buildPokemonsImages(data5k);
    pokemon10k.innerHTML = buildPokemonsImages(data10k);
}

function buildPokemonsImages(pokemons) {
    return `
        ${pokemons.map((pokemon) =>`
            <img src="${pokemon.img}">
        `).join("")}
    `;
}
