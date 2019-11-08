
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */

/**
 * Controllers imports
 */
// TODO IMPORT
const { Read, CreateAshtray, DeleteAshtray, Update } = require('@controllers');

// AUTH IMPORT
const { RegisterUser, LoginUser } = require('@controllers');

/**
 * Routes
 */
// AUTH ROUTES
router.post('/register', RegisterUser);
router.post('/login', LoginUser);

// TODO ROUTES
router.get('/all', Read);
router.post('/ashtray/create', CreateAshtray);
router.delete('/ashtray/delete/:id', DeleteAshtray);
router.patch('/update/:id', Update);

module.exports = router;
