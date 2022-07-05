const { getAllPokemon } = require("./utils");
const { Pokemon, Type } = require("../db");

const getAll = async (req, res) => {
  const { name } = req.query;
  const pokeTotal = await getAllPokemon();

  //res.send(pokeTotal);
  try {
    if (name) {
      const pokeName = pokeTotal.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
      pokeName.length
        ? res.status(200).send(pokeName)
        : res.status(404).send("no llego nada pa");
    } else {
      res.status(200).send(pokeTotal);
    }
  } catch (error) {
    res.status(404).send("error");
  }
};

const getDetailPoke = async (req, res) => {
  const { id } = req.params;
  const allPokesId = await getAllPokemon();
  try {
    if (id) {
      let pokemonById = allPokesId.filter((e) => e.id == id);
      pokemonById.length
        ? res.status(200).send(pokemonById)
        : res.status(404).send("Pokemon not found");
    }
  } catch (e) {
    console.log(e);
  }
};

const postCreate = async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, img, types } =
    req.body;
  try {
    if (name) {
      const allPoke = await getAllPokemon();
      const isPoke = allPoke.find((e) => e.name === name.toLowerCase());
      if (!isPoke) {
        const pokemon = await Pokemon.create({
          name,
          hp,
          attack,
          defense,
          speed,
          height,
          weight,
          img,
        });

        const typeDb = await Type.findAll({
          where: {
            name: types,
          },
        });
        pokemon.addType(typeDb);
        return res.status(201).send(pokemon);
      }
      return res.status(404).send("Pokemon name already exist");
    }
    if (!name) return res.status(404).send("Pokemon name is obligatory");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getAll, getDetailPoke, postCreate };
