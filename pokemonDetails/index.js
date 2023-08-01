function searchPokemon(){
    var pokemonName = document.getElementById("pokemonName").value;
    var pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

    fetch(pokemonUrl)
    .then((response) => response.json())
    .then((data) => {
      const pokemonData = {
        name: data.name,
        number: data.id,
        type: data.types.map((typeData) => typeData.type.name).join(', '),
        weight: data.weight,
        height: data.height,
        image: data.sprites.front_default,
      };

      displayPokemonData(pokemonData);
    })
    .catch((error) => {
      displayError("No se encontr&oacute el Pok&eacutemon. Intenta con otro n&uacutemero o nombre.");
    });
}
function displayPokemonData(pokemonData){

    document.getElementById('divForm').style.display="block";
    document.getElementById("img").src=pokemonData.image;
    document.getElementById("name").src=pokemonData.image;
    var fila="<tr><td>"+pokemonData.number+"</td><td>"+pokemonData.type+"</td><td>"+pokemonData.weight+"</td><td>"+pokemonData.height+"</td></tr>";

    document.getElementById("tableDates").innerHTML = fila;
    document.getElementById('errorMessage').style.display="none";
}
function displayError(message) {
  document.getElementById('errorMessage').innerHTML = message;
}
    