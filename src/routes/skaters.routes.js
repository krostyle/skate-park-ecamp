const { Router } = require('express');
const { renderProfile, renderEditProfile, updateSkater, deleteSkater, renderDashboard, updateEstado } = require('../controllers/skater.controllers');
const { jwtValidator } = require('../middlewares/jwtValidator');
const router = Router()

router.get('/profile', [jwtValidator], renderProfile);
router.get('/datos/:id', [jwtValidator], renderEditProfile);
router.get('/dashboard', [jwtValidator], renderDashboard);

router.put('/datos/:id', updateSkater);
router.delete('/datos/:id', deleteSkater);

router.put('/dashboard/:id', updateEstado)

module.exports = router