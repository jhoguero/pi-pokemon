const {Router} = require ("express")
const mwSaveTypes = require('../middlewares/mwSaveTypes');
const router = Router()
const getTypes = require('../controllers/getTypes');

router.get('/', mwSaveTypes, getTypes);

module.exports = router