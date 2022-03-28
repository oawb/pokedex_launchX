const pokeCard = document.querySelector(' [data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-ing]');
const pokeImgContainer = document.querySelector('[data-poke-ing-container]');
const pokeld = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');

const fetchPokemon = () => {
    const pokeNumberInput = document.getElementById("pokeNumber");
    let pokeNumber = pokeNumberInput.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/pokemon-sad.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}