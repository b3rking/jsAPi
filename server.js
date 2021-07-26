const http = require('http')

const server = http.createServer((req, res) => {
    res.end('et voila un nouveau serveur!')
})

server.listen(process.env.PORT || 3000, () => {
    console.log('http://127.1.1:2500');
})