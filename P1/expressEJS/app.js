const express = require('express') // require express
const app = express() // return dari hasil require function express // sebuah object yang punya buanyak method
const PORT = 3000 // Siapkan port yang akan digunakan untuk menjalankan server
const pool = require('./config/connection') // require koneksi pg

app.set('view engine', 'ejs') // <== kita ngeset ejs sebagai view engine pilihan kita

app.use( express.urlencoded({ extended: true}) ) // <== set middleware body parser, untuk mentranslate input form sebelum diterima oleh server

/*
Dalam sebuah routing, terdiri dari 3 komponen yaitu :
1. Route Method
2. Route Path
3. Route Handler (Function)
*/

app.get('/', (request, response) => {
    // console.log(request); // itu digunakan untuk menerima input
    // console.log(response); // itu digunakan untuk memberikan respon
    response.render('index')
})

app.get('/chefs', (request, response) => {
    pool.query(`SELECT * FROM "Chefs";`, (err, res) => {
        if(err){
            console.log(err);
        }else{
            response.render('chefs', { chefs: res.rows })
        }
    })
})

app.get('/chefs/add', (request, response) => {
    response.render('addChef')
})

app.post('/chefs/add', (request, response) => {
    let {fullName, birthDate, gender, city} = request.body
    pool.query(`
        INSERT INTO "Chefs" ("fullName", "birthDate", "gender", "city")
        VALUES ('${fullName}', '${birthDate}', '${gender}', '${city}')
    ;`, (err, res) => {
        if(err){
            console.log(err);
        }else{
            response.redirect('/chefs')
        }
    })
})

// Proses set port agar server kita berjalan di sebuah port
app.listen(PORT, () => {
    console.log(`Listening on PORT :`, PORT);
})
// MATIIN SERVER CTRL + C