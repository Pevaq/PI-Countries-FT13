const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountryR= require('./country')
const ActivityR= require('./activities')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', CountryR);
router.use('/activities', ActivityR);


module.exports = router;
