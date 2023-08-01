async function totalByType(type) {
    var pokemonUrl = "https://pokeapi.co/api/v2/type/" + type;

    return await fetch(pokemonUrl)
        .then((response) => response.json())
        .then((data) => {
            return (data.pokemon.length);
        })
        .catch((error) => {
            return (error);
        });
}
async function pokemonByType(typePokemon) {
    var pokemonUrl = "https://pokeapi.co/api/v2/type/" + typePokemon;

    return await fetch(pokemonUrl)
        .then((response) => response.json())
        .then((data) => {
            return data.pokemon.map((pokemon) => pokemon.pokemon.name);
        })
        .catch((error) => {
            return (error);
        });
}
async function pokemonTwoTypes(type1, type2) {
    var one = await pokemonByType(type1);
    var two = await pokemonByType(type2);
    const result = one.filter((element) => {
        if (two.includes(element)) {
            return element;
        }
    })

    return await result;
}
async function pokemonNumber(name) {
    var pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + name;

    return await fetch(pokemonUrl)
        .then((response) => response.json())
        .then((data) => {
            return (data.id);
        })
        .catch((error) => {
            return (error);
        });
}
async function pokemonStatesBase(number) {

    var pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + number;

    return await fetch(pokemonUrl)
        .then((response) => response.json())
        .then((data) => {
            return (data.stats);
        })
        .catch((error) => {
            return (error);
        });
}
async function pokemonType(number) {

    var pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + number;

    return await fetch(pokemonUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const pokemonData = data.types.map((typeData) => typeData.type.name);
            return (pokemonData);
        })
        .catch((error) => {
            return (error);
        });
}
const verifyTypeNumber = async (number, typePokemon) => {

    const result = await pokemonType(number);
    return (result.includes(typePokemon));
}

async function getPokemon(pokemonId) {
    try {
        const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        const pokemonData = {
            name: data.name,
            type: data.types.map((typeData) => typeData.type.name).join(', '),
            weight: data.weight,
        };
        return pokemonData;
    } catch (error) {
        throw error;
    }
}
const pokemonIds = [25,151,253];
const verifyPokemon = async (numbers, sortingOptions) => {
    const result = await Promise.all(numbers.map(async (number) => {
        try {
            return await getPokemon(number);
        } catch (error) {
            console.error(`Error fetching Pokémon with ID ${number}:`, error);
            return null;
        }
    }));
    return result.sort((a, b) => {
        if (sortingOptions === "name") {
            return a.name.localeCompare(b.name);
        }
        if (sortingOptions === "type") {
            return a.type.localeCompare(b.type);
        }
        if (sortingOptions === "weight") {
            return a.weight - b.weight;
        }
    });
};

function showMenu() {
    console.log("Menu Options:");
    console.log("1. Total pokemon by type");
    console.log("2. Total pokemon two types");
    console.log("3. Pokemon number");
    console.log("4. Show base stats");
    console.log("5. Pokemon by type,name and weight");
    console.log("6. Type of the pokemon ");
}

async function selectedOption(option) {
    switch (option) {
        case '1':
            console.log("Total pokemon: ", await totalByType("bug"));
            break;
        case '2':
            console.log("Total pokemon two types", await pokemonTwoTypes("fire", "normal"));
            break;
        case '3':
            console.log("Pokemon number: ", await pokemonNumber("pikachu"));
            break;
        case '4':
            console.log("Base stats: ", await pokemonStatesBase(25));
            break;
        case '5':
            console.log("Pokemon by type,name and weight: ", await verifyPokemon(pokemonIds,"weight"));
            break;
        case '6':
            console.log("Type of pokemon: ", await verifyTypeNumber(25, "fire"));
            break;
        default:
            console.log("Invalid option.");
            break;
    }
}

function executeMenu() {
    showMenu();
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter the number of the option you want to select: ", (option) => {
        // Code inside this callback will execute after the user enters their choice.
        selectedOption(option);
        rl.close();
    });
}
executeMenu();






