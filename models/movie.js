const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const movieSchema = new Schema({

},{
   timestamps: true 
});

module.exports = mongoose.model('Movies', movieSchema);