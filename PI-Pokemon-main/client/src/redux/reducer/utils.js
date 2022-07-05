export const filterPokemons = (filterBy, array) => {
  switch (filterBy) {
    case "All":
      return array;
    case "FromApi":
      return array.filter((poke) => typeof poke.id === "number");
    case "FromDb":
      return array.filter((poke) => typeof poke.id === "string");
    case filterBy:
      return array.filter((poke) =>
        poke.types.find((t) => t.name === filterBy)
      );
    default:
      return array;
  }
};

export const sortPokemons = (sortBy, array) => {
  switch (sortBy) {
    case "a-z":
      return array.sort((a, b) => a.name.localeCompare(b.name));
    case "z-a":
      return array.sort((a, b) => b.name.localeCompare(a.name));
    case "strong":
      return array.sort((a, b) => {
        if (a.attack < b.attack) return 1;
        if (a.attack > b.attack) return -1;
        return 0;
      });
    case "weak":
      return array.sort((a, b) => {
        if (a.attack > b.attack) return 1;
        if (a.attack < b.attack) return -1;
        return 0;
      });
    default:
      return array;
  }
};
