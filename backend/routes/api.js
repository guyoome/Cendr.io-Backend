
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */

/**
 * Controllers imports
 */
// TODO IMPORT
const { Read, Create, Delete, Update } = require('@controllers');

// AUTH IMPORT
const { RegisterUser, LoginUser } = require('@controllers');

// QUESTION IMPORT
const { CreateQuestion, ReadQuestions } = require('@controllers');

/**
 * Routes
 */
// AUTH ROUTES
router.post('/register', RegisterUser);
router.post('/login', LoginUser);

// TODO ROUTES
router.get('/all', Read);
router.post('/add', Create);
router.delete('/delete/:id', Delete);
router.patch('/update/:id', Update);

// QUESTION ROUTES 
router.post('/question/add', CreateQuestion);
router.get('/question/read',ReadQuestions)

module.exports = router;
