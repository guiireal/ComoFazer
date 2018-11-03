const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const routeCategoria = require('./routes/categoria')
const routePublicacao = require('./routes/publicacao')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())
app.use('/categorias', routeCategoria)
app.use('/publicacoes', routePublicacao)

app.get('/', async (request, response) => {
    response.render('index')
})

app.listen(port, (err) => {
    if (err)
        console.log(err)
    else
        console.log('Como-Fazer Server is running on port:', port)
})