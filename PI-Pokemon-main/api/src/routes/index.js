const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const typeRouter = require("./middlewares/type");
const pokemonRouter = require("./middlewares/pokemon");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/types", typeRouter);
router.use("/pokemons", pokemonRouter);

module.exports = router;
