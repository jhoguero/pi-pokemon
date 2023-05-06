const {Router} = require ("express")

const router = Router()
const getPokemonsName = require('../controllers/getPokemonsName');
const createPokemon = require('../controllers/createpokemon');
const getPokemonById = require("../controllers/getPokemonById");


router.get('/', getPokemonsName);
router.get('/:id', getPokemonById);

router.post('/', createPokemon);

module.exports = router