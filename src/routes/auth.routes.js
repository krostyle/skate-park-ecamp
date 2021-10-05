const { Router } = require('express');
const { renderLogin, renderRegister } = require('../controllers/auth.controllers');
const router = Router()


//localhost:3000/auth/login
router.get('/login', renderLogin);

//localhost:3000/auth/register
router.get('/register', renderRegister);

module.exports = router