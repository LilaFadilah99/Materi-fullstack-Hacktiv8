const express = require('express')
const app = express()
const PORT = 3000
const routers = require('./routers/index')

app.set('view engine', 'ejs')
app.use( express.urlencoded({ extended: true }) )
app.use('/', routers)

app.listen(PORT, () => {
    console.log(`I wuvv uuu `, PORT);
})