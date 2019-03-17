window.onload = function() {
    showPeriods();
};

function showTheBest(){
    fetch('./data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => { 
        function showPokemon(){ 
            let morning = data["pokemon"].filter(poke => {  
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 6 && time < 12 
            });
            let afternoon = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 12 && time < 18
            });
            let night = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 18 && time < 24
            });
            let dawn = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                return time >= 0 && time < 6
            });
            let best = Math.max.apply(Math,[morning.length,afternoon.length,night.length,dawn.length ]);
            document.getElementById("afternoon").innerHTML = ``;
            document.getElementById("night").innerHTML = ``;
            document.getElementById("dawn").innerHTML = ``;
            let bestContainer = document.getElementById("morning");
            switch (best){ 
                case morning.length:
                bestContainer.innerHTML = `
                <header>
                <h1>Manhã 6h as 12h</h1>
                </header>
                ${morning.map((pokemon) => `
                <div class="minicard">
                <h3>${pokemon["name"]}</h3>
                <img src="${pokemon["img"]}">
                <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                ${pokemon["type"].map(tipo => `
                <button class="type-poke color-${tipo}">${translate(tipo)}</button>
                `).join("")}
                </div>
                `).join("")}
                `
                case afternoon.length:
                bestContainer.innerHTML = `
                <header>
                <h1>Tarde 12h as 18h</h1>
                </header>
                ${afternoon.map((pokemon) => `
                <div class="minicard">
                <h3>${pokemon["name"]}</h3>
                <img src="${pokemon["img"]}">
                <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                ${pokemon["type"].map(tipo => `
                <button class="type-poke color-${tipo}">${translate(tipo)}</button>
                `).join("")}
                </div>
                `).join("")}
                `
                case night.length:
                bestContainer.innerHTML = `
                <header>
                <h1>Noite 18h as 24h</h1>
                </header>
                ${night.map((pokemon) => `
                <div class="minicard">
                <h3>${pokemon["name"]}</h3>
                <img src="${pokemon["img"]}">
                <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                ${pokemon["type"].map(tipo => `
                <button class="type-poke color-${tipo}">${translate(tipo)}</button>
                `).join("")}
                </div>
                `).join("")}
                `
                case dawn.length:
                bestContainer.innerHTML = `
                <header>
                <h1>Madrugada 00h as 6h</h1>
                </header>
                ${dawn.map((pokemon) => `
                <div class="minicard">
                <h3>${pokemon["name"]}</h3>
                <img src="${pokemon["img"]}">
                <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
                ${pokemon["type"].map(tipo => `
                <button class="type-poke color-${tipo}">${translate(tipo)}</button>
                `).join("")}
                </div>
                `).join("")}
                `
            }
        }
        document.getElementById("menu1").classList.remove("activeMenu");
        document.getElementById("menu2").classList.add("activeMenu");
        showPokemon();
    });
}

function showPeriods(type){
    fetch('./data/pokemon/pokemon.json').then(response => {
        return response.json();
    }).then(data => {
        function showPokemon(){
            let morning = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                if (type != null){
                    return time >= 6 && time < 12 && poke["type"].includes(type)
                }else{
                    return time >= 6 && time < 12
                }
            });
            let pokemonMorning = document.getElementById("morning");
            pokemonMorning.innerHTML = `
            <header>
            <h1>Manhã 6h as 12h</h1>
            </header>
            ${morning.map((pokemon) => `
            <div class="minicard">
            <h3>${pokemon["name"]}</h3>
            <img src="${pokemon["img"]}">
            <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
            ${pokemon["type"].map(tipo => `
            <button class="type-poke color-${tipo}">${translate(tipo)}</button>
            `).join("")}
            </div>
            `).join("")}
            `
            let afternoon = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                if (type != null){
                    return time >= 12 && time < 18 && poke["type"].includes(type)
                }else {
                    return time >= 12 && time < 18
                }
                
            });
            let pokemonAfternoon = document.getElementById("afternoon");
            pokemonAfternoon.innerHTML = `
            <header>
            <h1>Tarde 12h ás 18h</h1>
            </header>
            ${afternoon.map((pokemon) => `
            <div class="minicard">
            <h3>${pokemon["name"]}</h>
            <img src="${pokemon["img"]}">
            <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
            ${pokemon["type"].map(tipo => `
            <button class="type-poke color-${tipo}">${translate(tipo)}</button>
            `).join("")}
            </div>
            `).join("")}
            `
            let night = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                if (type != null){
                    return time >= 18 && time < 24 && poke["type"].includes(type)
                }else{
                    return time >= 18 && time < 24
                }
                
            });
            let pokemonNight = document.getElementById("night");
            pokemonNight.innerHTML = `
            <header>
            <h1>Noite 18h ás 24h</h1>
            </header>
            ${night.map((pokemon) => `
            <div class="minicard">
            <h3>${pokemon["name"]}</h3>
            <img src="${pokemon["img"]}">
            <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
            ${pokemon["type"].map(tipo => `
            <button class="type-poke color-${tipo}">${translate(tipo)}</button>
            `).join("")}
            </div>
            `).join("")}
            `
            let dawn = data["pokemon"].filter(poke => {
                let time = Number(poke["spawn_time"].split(":",1));
                if (type != null){
                    return time >= 0 && time < 6 && poke["type"].includes(type)
                }else{
                    return time >= 0 && time < 6
                }
                
            });
            let pokemonDawn = document.getElementById("dawn");
            pokemonDawn.innerHTML = `
            <header>
            <h1>Madrugada 00h as 6h</h1>
            </header>
            ${dawn.map((pokemon) => `
            <div class="minicard">
            <h3>${pokemon["name"]}</h3>
            <img src="${pokemon["img"]}">
            <h5>Chances de encontrar: ${pokemon["avg_spawns"]}%</h5>
            ${pokemon["type"].map(tipo => `
            <button class="type-poke color-${tipo}">${translate(tipo)}</button>
            `).join("")}
            </div>
            `).join("")}
            `
        }
        document.getElementById("menu1").classList.add("activeMenu");
        document.getElementById("menu2").classList.remove("activeMenu");
        showPokemon();
    });
}

var menus = document.getElementsByClassName("open-menu");
menus.forEach(menu => {
    menu.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            content.style.maxHeight = null;
        } else {
            content.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}) 

function translate (type){
    switch (type){
        case "Water":
        return "Água"
        case "Dragon":
        return "Dragão"
        case "Electric":
        return "Elétrico"
        case "Ghost":
        return "Fantasma"
        case "Fire":
        return "Fogo"
        case "Ice":
        return "Gelo"
        case "Bug":
        return "Inseto"
        case "Fighting":
        return "Lutador"
        case "Normal":
        return "Normal"
        case "Rock":
        return "Pedra"
        case "Grass":
        return "Planta"
        case "Psychic":
        return "Psíquico"
        case "Ground":
        return "Terra"
        case "Poison":
        return "Venenoso"
        case "Flying":
        return "Voador"
    }
}
