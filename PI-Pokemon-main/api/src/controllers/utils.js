const axios = require("axios");
const { Pokemon, Type } = require("../db");

//TRAIGO LOS DATOS DE LA API, HACIENDO OTRO LLAMADO A LA URL DEL POKEMON PARA QUE ME TRAIGA LOS DATOS NECESARIOS EN LA RUTA PRINCIPAL (NOMBRE, IMAGEN, TIPO).
const getApiInfo = async () => {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  let pokemons = [];
  while (pokemons.length < 100) {
    let info = await axios.get(url);
    let pokemonesApi = info.data;
    let auxPokemones = pokemonesApi.results.map((e) => {
      return {
        name: e.name,
        url: e.url,
      };
    });
    pokemons.push(...auxPokemones);
    url = pokemonesApi.next;
  }
  let pokesWithData = await Promise.all(
    pokemons.map(async (e) => {
      let pokemon = await axios.get(e.url);
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
    })
  );
  // console.log(pokesWithData);
  return pokesWithData;
};

//TRAIGO TODOS LOS POKEMONES CREADOS DESDE LA BASE DE DATOS EN LA TABLA POKEMON, Y QUE INCLUYA LA TABLA TYPE CON SU ATRIBUTO NAME.
const getDbInfo = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
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

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllPokemon,
};
