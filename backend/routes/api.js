
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

/**
 * Routes
 */
// AUTH ROUTES
router.post('/register', RegisterUser);
router.post('/login', LoginUser);

// TODO ROUTES
router.post('/ashtray/create', CreateAshtray);
router.get('/ashtray/readone/:id', ReadOneAshtray);
router.get('/ashtray/read', ReadAshtray);
router.put('/ashtray/reset/:id', ResetAshtray);
router.patch('/ashtray/update/:id', UpdateAshtray);
router.delete('/ashtray/delete/:id', DeleteAshtray);

// QUESTION ROUTES 
router.post('/question/add', CreateQuestion);
router.get('/question/read', ReadQuestions);
router.get('/question/read/:id', ReadQuestion);
router.patch('/question/update/:id', UpdateQuestion);
router.delete('/question/delete/:id', DeleteQuestion);

// USER QUESTION ROUTES 
router.post('/user/question/add', CreateUserQuestion);
router.get('/user/question/read', ReadUserQuestions);
router.get('/user/question/read/:id', ReadUserQuestion);
router.patch('/user/question/update/:id', UpdateUserQuestion);
router.delete('/user/question/delete/:id', DeleteUserQuestion);

module.exports = router;
