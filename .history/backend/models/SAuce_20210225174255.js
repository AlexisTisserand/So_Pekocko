const mongoose = require('mongoose')

const sauceSchema = mongoose.Schema({
    id: {type: ObjectID, required: true},
    userId: {type: String, required: true},
    name: {type: String, required: true},
    manufacturer: {type: String, required: true},
    description: {type: String, required: true},
    mainPepper: {type: String, required: true},
    imageUrl: {type: String, required: true},
    heat: {type: Number, required: true},
    likes: {type: Number, required: true},
    dislikes: {type: Number, required: true},
    usersLiked: {type: [String], required: true},
    usersDisliked: {type: [String], required: true},
});

module.exports = mongooser.model('Sauce', sauceSchema);