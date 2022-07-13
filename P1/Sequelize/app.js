const express = require('express')
const app = express()
const PORT = 3000
const router = require('./routers/index')

app.set('view engine', 'ejs')

app.use( express.urlencoded( {extended: true}))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Makan Bang`);
})