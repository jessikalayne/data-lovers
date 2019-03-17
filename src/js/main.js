window.onload = function() {
    openPoke();
};

function openPoke(type) {
    fetch('./data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => {
        let pokemons = data["pokemon"].filter (poke => {
            if (type != null){
                return poke["type"].includes(type);
            }else {
                return poke;
            }
        })
        let pokemonData = document.getElementById("cards");
        pokemonData.innerHTML = `
        ${pokemons.map((pokemon) => `
        <div class="card">
        <h3>${pokemon["name"]}</h3>
        <img src="${pokemon["img"]}">
        <h3>Altura: ${pokemon["height"]}</h3>
        <h3>Peso: ${pokemon["weight"]}</h3>
        <h3>Candies: ${candiesCount(pokemon["candy_count"])}</h3>
        ${pokemon["type"].map(tipo => `
        <button class="type-poke color-${tipo}">${translate(tipo)}</button>
        `).join("")}
        </div>
        `).join("")}
        `
    });
}

function orderBy (order) {
    fetch('./data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => {
        let pokemons =  data["pokemon"];
        if (order == "asc"){
            pokemons.sort((a, b) =>{
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        }else if (order == "dec"){
            pokemons.sort((a, b) =>{
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            });
        }
        let pokemonData = document.getElementById("cards");
        pokemonData.innerHTML = `
        ${pokemons.map((pokemon) => `
        <div class="card">
        <h3>${pokemon["name"]}</h3>
        <img src="${pokemon["img"]}">
        <h3>Altura: ${pokemon["height"]}</h3>
        <h3>Peso: ${pokemon["weight"]}</h3>
        <h3>Candies: ${candiesCount(pokemon["candy_count"])}</h3>
        ${pokemon["type"].map(tipo => `
        <button class="type-poke color-${tipo}">${translate(tipo)}</button>
        `).join("")}
        </div>
        `).join("")}
        `
    });
}

function candiesCount (name){
    console.log(name);
    if (name == undefined) {
        return "Não Evolui";
    }else{
        return name;
    }
}