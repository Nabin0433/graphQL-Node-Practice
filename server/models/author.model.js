const monggose = require('mongoose');
const Schema = monggose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number,
})

module.exports = monggose.model('Author', authorSchema)