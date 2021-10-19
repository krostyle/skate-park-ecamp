const { Router } = require('express');
const { renderLogin, renderRegister, createSkater, loginSkater } = require('../controllers/auth.controllers');
const router = Router()


//localhost:3000/auth/login
router.get('/login', renderLogin);

//localhost:3000/auth/register
router.get('/register', renderRegister);

//localhost:3000/auth/register
router.post('/register', createSkater)

//localhost:3000/auth/login
router.post('/login', loginSkater)
module.exports = router