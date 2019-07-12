module.exports = {
  insertPokemon,
  getPokemons,
  getPokemonByID,
  getPokemonByName
};

const db = require("../dbConfig");

// CRUD

// Create

async function insertPokemon(pokemon) {
  return await db
    .insert({
      name: pokemon.name,
      type: pokemon.type || "default",
      fighting_style: pokemon.fighting_style || "default"
    })
    .returning("id")
    .then(res => {
      return { id: res[0] };
    });
}

// Read

async function getPokemons() {
  return await db.select("*").from("pokemon");
}

async function getPokemonByID(id) {
  return await db
    .select("*")
    .from("pokemon")
    .where({ id })
    .first();
  // [] returned by default even when there is only one result so we use .first()
}

async function getPokemonByName(name) {
  return await db
    .select("*")
    .from("pokemon")
    .where({ name })
    .first();
}

// Update - TBD

// Delete - TBD
