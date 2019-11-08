
const { Router } = require('express');

const router = Router();

/**
 * Middlewares imports
 */

/**
 * Controllers imports
 */
// Ashtray IMPORT
const { ReadAshtray, ReadOneAshtray, CreateAshtray, DeleteAshtray, ResetAshtray, UpdateAshtray } = require('@controllers');

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
router.post('/ashtray/create', CreateAshtray);
router.get('/ashtray/read/:id', ReadOneAshtray);
router.get('/ashtray/read', ReadAshtray);
router.put('/ashtray/reset/:id', ResetAshtray);
router.patch('/ashtray/update/:id', UpdateAshtray);
router.delete('/ashtray/delete/:id', DeleteAshtray);

// QUESTION ROUTES 
router.post('/question/add', middleware, CreateQuestion);
router.get('/question/read', middleware, ReadQuestions);
router.get('/question/read/:id', middleware, ReadQuestion);
router.patch('/question/update/:id', middleware, UpdateQuestion);
router.delete('/question/delete/:id', middleware, DeleteQuestion);
module.exports = router;
