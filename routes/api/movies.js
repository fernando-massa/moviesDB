const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/api/movies');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// Routes
router.post('/', ensureLoggedIn, moviesCtrl.search);
router.post('/add', ensureLoggedIn, moviesCtrl.addMovies);
router.get('/', ensureLoggedIn, moviesCtrl.getCollection);
router.delete('/:id', ensureLoggedIn, moviesCtrl.deleteMovies);
router.post('/:id/comments', ensureLoggedIn, moviesCtrl.addComment);

module.exports = router;