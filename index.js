
const express = require('express')
const cors = require('cors');

require('dotenv').config()

require('./db.js')

const app = express()

const porta = process.env.PORT || 3000

app.use(cors());

const pictureRouter = require('./router/pictures')

app.use("/pictures",pictureRouter)

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
});
