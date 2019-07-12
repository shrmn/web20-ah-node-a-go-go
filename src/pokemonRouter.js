const router = require("express").Router();
const Pokemon = require("./database/helpers/pokemon");
const validatePokemon = require("./validatePokemon");

router.post("/", async (req, res) => {
  const newPokemon = req.body;
  try {
    const { id } = await Pokemon.insertPokemon(newPokemon);
    const pokemon = await Pokemon.getPokemonByID(id);
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const pokemon = await Pokemon.getPokemons();
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", validatePokemon, (req, res) => {
  // console.log(JSON.stringify(req.pokemon));
  try {
    res.status(200).json(req.pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
