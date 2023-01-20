const monggose = require('mongoose');
const Schema = monggose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorid: String,
})

module.exports = monggose.model('Book', bookSchema)