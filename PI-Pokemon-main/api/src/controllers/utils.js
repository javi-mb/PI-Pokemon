const axios = require("axios");
const { Pokemon, Type } = require("../db");

//TRAIGO LOS DATOS DE LA API, HACIENDO OTRO LLAMADO A LA URL DEL POKEMON PARA QUE ME TRAIGA LOS DATOS NECESARIOS EN LA RUTA PRINCIPAL (NOMBRE, IMAGEN, TIPO).
const getApiInfo = async () => {
  try {
    const apiURL = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=80"
    );
    const totalReq = await apiURL.data.results.map(async (el) => {
      const pokemon = await axios.get(el.url);

      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        img: pokemon.data.sprites.other.home.front_default,
        types: pokemon.data.types.map((e) => {
          return {
            name: e.type.name,
            img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
          };
        }),
        hp: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        speed: pokemon.data.stats[5].base_stat,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
      };
    });
    const MainInfoPoke = await Promise.all(totalReq);
    return MainInfoPoke;
  } catch (error) {
    console.log(error);
  }
};

//TRAIGO TODOS LOS POKEMONES CREADOS DESDE LA BASE DE DATOS EN LA TABLA POKEMON, Y QUE INCLUYA LA TABLA TYPE CON SU ATRIBUTO NAME.
const getDbInfo = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
    },
  });
};

//TRAIGO TODOS LOS POKEMONES, TANTO DE LA API COMO DE LA DB.
const getAllPokemon = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const allPokemon = [...apiInfo, ...dbInfo];
  //console.log(apiInfo);
  return allPokemon;
};

//BUSCO POR ID EN LA API
const getPokeIdApi = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let pokemon = (await axios.get(url)).data;

  let pokemonInfo = [
    {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.sprites.other.home.front_default,
      types: pokemon.types.map((e) => {
        return {
          name: e.type.name,
        };
      }),
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      speed: pokemon.stats[5].base_stat,
      height: pokemon.height,
      weight: pokemon.weight,
    },
  ];

  return pokemonInfo;
};

//BUSCO POR ID EN LA DB
const getPokeIdDb = async (id) => {
  const pokemons = await getDbInfo();
  const pokemonInfo = pokemons.filter((p) => p.id == id);

  return pokemonInfo;
};

//CONDICION BUSCADO
const getPokeId = async (id) => {
  let pokeDetail;
  if (id.length < 5) {
    pokeDetail = await getPokeIdApi(id);
  } else {
    pokeDetail = await getPokeIdDb(id);
  }

  return pokeDetail;
};

//BUSCAR POR NAME
const getPokeName = async (name) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  let pokemon = (await axios.get(url)).data;

  let pokemonInfo = [
    {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.sprites.other.home.front_default,
      types: pokemon.types.map((e) => {
        return {
          name: e.type.name,
        };
      }),
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      speed: pokemon.stats[5].base_stat,
      height: pokemon.height,
      weight: pokemon.weight,
    },
  ];

  return pokemonInfo;
};

module.exports = {
  getAllPokemon,
  getPokeId,
  getPokeName,
};
