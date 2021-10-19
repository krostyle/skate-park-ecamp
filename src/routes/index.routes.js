const { Router } = require('express');
const { renderIndex } = require('../controllers/index.controllers');


const router = Router()


//localhost:3000/
router.get('/', renderIndex);

module.exports = router