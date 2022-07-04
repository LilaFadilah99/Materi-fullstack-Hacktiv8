# `Express`

## `Apa itu express ?`
Express adalah sebuah package yang digunakan untuk membantu proses develop aplikasi teman - teman terutama dari sisi server

<br>

## `Contoh apa saja yang bisa dibuat sama Express`
1. Real-time chat
2. Single-page application
3. Real-time collaboration tools
4. Streaming apps
5. Microservices architecture
6. etc

<br>


## `Routing`
Routing adalah jembatan yang berfungsi untuk menghubungkan client dengan server.

<br>


## `Komponen Routing `

<br>


1. `Route Methods`
Route Methods adalah method - method yang dimiliki oleh instance express, dimana setiap method memiliki fungsi masing - masing.

    Beberapa contoh method yang dimiliki oleh `express()`.

| Method | keterangan |
|--------|------------|
| GET | Digunakan untuk mengambil / membaca sesuatu dari sebuah resource |
| POST| Digunakan untuk menginput / memasukan data untuk membuat data baru |

<br>

2. `Route Path `
Route Path adalah sebuah URL yang ditulis dalam bentuk string, dimana sebuah URL bisa bersifat pasti ataupun dinamis, dimana path tersebut akan diakses pada client melakukan request.

<br>

3. `Route Handler`
Route Handler adalah sebuah callback function, dimana pada callback tersebut akan menerima 2 parameter yang berupa `request` dan `response`.

    a. ***request***, digunakan untuk menerima input dari client, baik melalui URL atau Form. contohnya :

        - request.body, digunakan untuk menerima input dari FORM.
        - request.params, digunakan untuk menerima input melalui URL yang diawali dengan `:` dan diatur pada path.
        - request.query, digunakan untuk menerima input melalui URL yang diawali dengan '?' dan diatur pada URL Client.

    b. ***response***, digunakan untuk memberikan respon yang diinginkan. contohnya :

        - response.send(), digunakan untuk memberikan respon sesuai dengan data apapun yang kita berikan.
        - response.render(), digunakan untuk memberikan respon yang merender sebuah template html.
        - response.redirect(), digunakan untuk memberikan respon yang mengarahkan client ke URL yang sudah ada.

<br>

## Wrap it Up
Setelah setup dan routing awal selesai, jangan lupa untuk menjalankan method `listen` pada instance `express()`. dimana pada proses ini server temna - teman akan diberikan nomor port yang akan digunakan server untuk berjalan dan mendengarkan permintaan client.


```js
const express = require('express')
const app = express()
const PORT = 3000

//method, path,     handler(callback)    
app.get('/', (request, response) => {
    // request atau response
})

app.listen(PORT, () => {
    console.log(`I love you`, PORT)
})
```

## `Body-Parser dan method post`
- `Body Parser` adalah sebuah middler ware, yang bisa digunakan untuk menaruh proses diantara proses yang terjadi pada sebuah endpoint.
Jika express membutuhkan input, yang diinput melalui sebuah `form`.
maka body-parser harus di set.
Perhatikan peletakan proses set body parser, usahakan semua routing yang menggunakan method `post`, diletakan dibawah body-parser.

- `method post` adalah sebuah routing yang dibuat untuk menerima input dari user, terutama melalui sebuah `form`. pada proses pembuatan `form` pada html. pastikan attribute `action` dan `method` diisi dengan routing dan method yang sesuai.  