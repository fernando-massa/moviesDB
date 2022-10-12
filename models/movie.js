const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String},
    user: {type: Schema.Types.ObjectId, ref: "User"}
})

const movieSchema = new Schema({
    poster_image: {type: String},
    title: {type: String},
    year: {type: String},
    user: [{type: Schema.Types.ObjectId, ref: "User"}],
    comments: [commentSchema]
},{
   timestamps: true 
});

module.exports = mongoose.model('Movies', movieSchema);