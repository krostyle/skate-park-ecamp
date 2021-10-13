const { Router } = require('express');
const { renderLogin, renderRegister, createSkater } = require('../controllers/auth.controllers');
const router = Router()


//localhost:3000/auth/login
router.get('/login', renderLogin);

//localhost:3000/auth/register
router.get('/register', renderRegister);

router.post('/register', createSkater)
    // router.post('/register/photo', uploadFile)
module.exports = router