
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

// QUESTION IMPORT
const { CreateQuestion, ReadQuestions, ReadQuestion, UpdateQuestion, DeleteQuestion } = require('@controllers');

// USER QUESTION IMPORT
const { CreateUserQuestion, ReadUserQuestions, ReadUserQuestion, UpdateUserQuestion, DeleteUserQuestion } = require('@controllers');

// MIDDLEWARES
const { middleware } = require('@middlewares');
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

// QUESTION ROUTES 
router.post('/question/add',middleware, CreateQuestion);
router.get('/question/read',middleware, ReadQuestions);
router.get('/question/read/:id',middleware, ReadQuestion);
router.patch('/question/update/:id',middleware, UpdateQuestion);
router.delete('/question/delete/:id',middleware, DeleteQuestion);
module.exports = router;
