const Pokemon = require("./database/helpers/pokemon");

async function validatePokemon(req, res, next) {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.getPokemonByID(id);
    req.pokemon = pokemon;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = validatePokemon;
