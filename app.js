const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://b3rking:mongodb@cluster0.c4lmd.mongodb.net/mydb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => { console.log('connection reussie :)'); })
.catch((err) => { console.log('connection echoué'+ err); })


const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content, Accept, Content-Type, Authorization')
    // res.setHeader('Access-Control-Allow-Methods', 'GET POST PUT PATCH DELETE OPTIONS')
    next()
})

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
          },
          {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
          }
    ]
    res.status(200).json(stuff)
})

// app.use(bodyParser.json())     traiterai tout les requete
app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'data sent'
    })
})







module.exports = app