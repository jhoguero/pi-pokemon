const {Router} = require ("express")

const router = Router()
const getPokemonsName = require('../controllers/getPokemonsName');
const createPokemon = require('../controllers/createpokemon');
const getPokemonById = require("../controllers/getPokemonById");
const mwSaveTypes = require('../middlewares/mwSaveTypes');

router.get('/',mwSaveTypes, getPokemonsName);
router.get('/:id',mwSaveTypes, getPokemonById);

router.post('/',mwSaveTypes, createPokemon);

module.exports = router