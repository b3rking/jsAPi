const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('working on request...');
    next()
})

app.use((req, res, next) => {
    res.status(200)
    next()
})

app.use((req, res, next) => {
    res.json({
        author: 'b3rking',
        'country': 'Burundi',
        'message': 'la requetee est passé'
    })
    next()
})

app.use((req, res, next) => {
    console.log('reponse envoyé!');
    next()
})

module.exports = app