const { Router } = require('express');
const { createSkater } = require('../controllers/skater.controllers');
const router = Router()


//api/skaters/
router.post('/', createSkater)

module.exports = router