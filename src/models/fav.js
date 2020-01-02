const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavBook = new Schema({
    image: String,
    title: String,
    author: String,
    publishedDate: Date
})

const Fav = mongoose.model('googlebooks', FavBook)
module.exports = Fav