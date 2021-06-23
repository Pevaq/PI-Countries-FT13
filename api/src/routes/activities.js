const { Router } = require('express');
const { newAct } = require('../controllers/activities')
const router= Router();

router.post('/', newAct )  


module.exports = router;

