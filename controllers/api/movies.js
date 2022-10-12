
const fetch = require("node-fetch");
const Movies = require('../../models/movie');

module.exports = {
    search,
    addMovies,
    getCollection,
    deleteMovies,
    addComment
}

async function addComment(req, res) {
    const movie = await Movies.findById(req.params.id);
    req.body.user = req.user._id;
    movie.comments.push(req.body);
    await movie.save();
    res.json(movie);
}

async function deleteMovies(req, res) {
    const remove = await Movies.findByIdAndDelete(req.params.id);
    res.json(remove);
}

async function getCollection(req, res) {
    const movies = await Movies.find({user:req.user._id}).sort("-createdAt");
    res.json(movies);
}

async function search(req, res) {
    
    const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${req.body.query}&page=1&include_adult=false`)
    .then((res) => res.json());
    res.json(movies.results);
}

async function addMovies(req,res) {
    const movie = await Movies.findOne({API_ID:req.body.API_ID});
    if (movie) {
        let movieUser = movie.user.includes(req.user._id);
        if (movieUser) return
        movie.user.push(req.user._id);
        await movie.save();
        res.json(movie);
    } else {
        req.body.user = req.user._id;
        const newMovies = new Movies(req.body);
        await newMovies.save();
        res.json(newMovies);
    }
}