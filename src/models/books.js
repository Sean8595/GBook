const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GoogleBooksSchema = new Schema({
    image: String,
    title: String,
    author: String,
    publishedDate: Date
})

const GoogleBooks = mongoose.model('googlebooks', GoogleBooksSchema)
module.exports = GoogleBooks