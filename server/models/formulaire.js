const mongoose = require('mongoose');
const validator = require('validator');

const form = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
   email : {
        type: String,
        required: [true, 'Please provide an valid email address'],
        unique: true
    }, 
    telephone : {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Formulaire', form);