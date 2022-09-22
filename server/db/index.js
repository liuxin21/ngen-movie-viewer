const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://test:interview@interview.4xe7nrd.mongodb.net/test', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db